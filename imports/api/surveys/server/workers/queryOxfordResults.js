import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Job } from 'meteor/vsivsi:job-collection'
import jc from './jobCollection'

import { SurveyResponses } from '../../collections/surveyResponses'

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
            case 'Succeeded':
                SurveyResponses.update({_id: job.data.surveyResponseId}, { $set: { emotionData: JSON.parse(resp.data.processingResult) }})
                job.done()
                break
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
