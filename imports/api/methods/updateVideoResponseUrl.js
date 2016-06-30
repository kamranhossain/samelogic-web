import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Job } from 'meteor/vsivsi:job-collection'

import { Responses } from '../collections/responses'

export default new ValidatedMethod({
    name: 'surveys.updateVideoResponseUrl',
    validate: new SimpleSchema({
        responseId: { type: String },
        url: {
            type: String,
            regEx: SimpleSchema.RegEx.Url
        }
    }).validator(),
    run({ responseId, url}) {
        Responses.update({_id: responseId}, { $set: { contentUrl: url }})
        
        if(!this.isSimulation){
            //kick off the job to analyze video
            new Job('surveyJobQueue', 'startVideoAnalysis',{
                responseId,
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

