import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

import jc from './jobCollection'

import { SurveyResponses } from '../../collections/surveyResponses'
import { Campaigns } from '../../collections/campaigns'
import Emojis from '/imports/api/collections/emojis'

jc.processJobs('queryOxfordResult', (job, callback) =>{
    HTTP.get(job.data.operationLocation, {
        headers : {
            'Ocp-Apim-Subscription-Key': Meteor.settings.OxfordApiKey
        }
    }, (err, resp) =>{
        if(err){
            if(err.response.data.error.code == 'RateLimitExceeded'){
                // Fail the job so we can retry if rate limited
                job.fail('Rate limited')
            }
            else{
                // Cancel job if some other error than rate limiting.
                job.log('Querying for Oxford results failed.',{
                    level: 'warning',
                    data: err.response
                })
                job.cancel()
            }
        }
        else{
            switch(resp.data.status){
            case 'Running':
            case 'Not Started':
            case 'Uploading':
                job.fail(resp.data)
                break
            case 'Failed':
                job.log('Status Failed.',{
                    level: 'warning',
                    data: resp.data
                })
                job.cancel()
                break
            case 'Succeeded': {
                const oxfordJson = JSON.parse(resp.data.processingResult)
                
                const parsedOxfordResult = crunchOxfordJSON(oxfordJson)
                SurveyResponses.update({_id: job.data.surveyResponseId}, { $set: 
                { 
                    emotionData: parsedOxfordResult,
                    rawOxfordData: oxfordJson
                }})

                const emoji = mapEmojiFromEmotion(parsedOxfordResult.emotion)
                // TODO: if emoji is null, log or do something.
                const surveyResponse = SurveyResponses.findOne({_id: job.data.surveyResponseId})
                Campaigns.update(
                    {
                        _id: surveyResponse.campaignId, 'analytics.emojis.emoji': emoji
                    }, 
                    { 
                        $inc: {
                            'analytics.responses': 1,
                            'analytics.emojis.$.count': 1 
                        }
                    }
                )
                
                job.done()
                break
            }
            default:
                job.log('Unknown status reported.',{
                    level: 'warning',
                    data: resp.data
                })
                job.cancel()
            }
        }
        callback()
    })    
})

function crunchOxfordJSON(json, mapTicksToSeconds) {
        
    var events = []
    var fragments = json.fragments
    
    for(var f = 0; f < fragments.length -1; f++) {
        var fragment = fragments[f]
        var fragmentStartTime = fragment.start
        if(fragment['interval']) {
            let eventDuration = fragment.interval
            for(var e = 0; e < fragment.events.length; e++){
                var event = fragment.events[e]
                if(event.length == 1) {
                    let scores = event[0].windowMeanScores
                    var thisEvent = {
                        start: fragmentStartTime + eventDuration * e,
                        duration: eventDuration,
                        emotion: chooseEmotionFromScores(scores)
                    }
                    // merge consecutive events that have the same emotion 
                    // to create longer event-emotion runs
                    // as a simplification this ignores the fragment boundary for an event
                    let lastEvent = events[events.length-1]
                    if(lastEvent 
                        && (lastEvent.start+lastEvent.duration) == thisEvent.start
                        && thisEvent.emotion == lastEvent.emotion
                        ) 
                    {
                        events[events.length-1].duration += thisEvent.duration          
                    } else {
                        events.push(thisEvent)
                    }
                }
            }
        }
    }
    // by default the times are in ticks to keep the merging logic simple
    // but the ticks aren't the same between videos 
    // so optionally map values to seconds
    if(mapTicksToSeconds) {
        events.forEach(function(event){
            event.start /= json.timescale
            event.duration /= json.timescale
        })
    }
    return {
        timescale: json.timescale,
        framerate: json.framerate,
        width: json.width,
        height: json.height,
        emotionalEvents: events,
        emotion: chooseEmotionFromEvents(events)
    }
}

// chooses an emotion based on its total run timescale
// uses an object as "hash" to build  emotion->time properties from events
// this looks like the oxford emotion score format 
// so the chooseEmotionFromScores approach can be used to choose the top one

function chooseEmotionFromEvents(events) {
    var totals = events.reduce(function(acc, event){
        acc[event.emotion] = (acc[event.emotion] || 0) + event.duration
        return acc
    }, {})
    return chooseEmotionFromScores(totals)
}

// choose an emotion based on the highest confidence level
function chooseEmotionFromScores(scores) {
    var paired = Object.keys(scores).map(key => [scores[key], key])
    var sorted = paired.sort((s1, s2) => s1[0] < s2[0])
    return sorted[0][1]
}



function mapEmojiFromEmotion(emotion){
    const emoji = Emojis.nodes.find((e) => e.emotions.find((em) => em == emotion))

    return emoji ? emoji.value : null
}