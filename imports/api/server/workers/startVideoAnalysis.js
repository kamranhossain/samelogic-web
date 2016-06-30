import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

import { Job } from 'meteor/vsivsi:job-collection'

import jc from './jobCollection'

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
                responseId: job.data.responseId,
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