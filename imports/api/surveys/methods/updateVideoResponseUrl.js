import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

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
    }
})

