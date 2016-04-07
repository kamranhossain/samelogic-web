import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

import { JobCollection, Job } from 'meteor/vsivsi:job-collection'


var jc = JobCollection('surveyJobQueue')

jc.setLogStream(process.stdout)

jc.startJobServer()

jc.processJobs('startVideoAnalysis', (job, callback) =>{
    HTTP.post('https://api.projectoxford.ai/emotion/v1.0/recognizeInVideo', {
        headers : {
            'Ocp-Apim-Subscription-Key': Meteor.settings.OxfordApiKey
        },
        data: {
            url: job.data.url
        }
    }, (err, resp) =>{
        if(err){
            if(err.response.data.error.code == 'RateLimitExceeded'){
                // Fail the job so we can retry if rate limited
                job.fail('Rate limited')
            }
            else{
                // Cancel job if some other error than rate limiting.               
                job.log('Starting Oxford video analysis failed.',{
                    level: 'warning',
                    data: err.response
                })
                job.cancel()
            }
        }
        else{
            new Job('surveyJobQueue', 'queryOxfordResult',{
                surveyResponseId: job.data.surveyResponseId,
                operationLocation: resp.headers['operation-location']
            })
            .priority('normal')
            .delay(6000)
            .retry({
                wait: 60000 // wait 1 minute between runs
            })
            .save()
            job.done()
        }
        callback()
    })    
})

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
                job.done(resp.data)
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
