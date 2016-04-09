import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Job } from 'meteor/vsivsi:job-collection'

import { SurveyResponses } from '../collections/surveyResponses'

export default new ValidatedMethod({
    name: 'surveys.updateVideoResponseUrl',
    validate: new SimpleSchema({
        surveyResponseId: { type: String },
        url: {
            type: String,
            regEx: SimpleSchema.RegEx.Url
        }
    }).validator(),
    run({ surveyResponseId, url}) {
        SurveyResponses.update({_id: surveyResponseId}, { $set: { contentUrl: url }})
        
        if(!this.isSimulation){
            //kick off the job to analyze video
            new Job('surveyJobQueue', 'startVideoAnalysis',{
                surveyResponseId,
                url
            })
            .priority('normal')
            .retry({
                wait: 60000
            })
            .save()
        }
    }
})

