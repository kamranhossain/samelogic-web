import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { SurveyResponses } from '../collections/surveyResponses'

export default new ValidatedMethod({
    name: 'surveys.createVideoResponse',
    validate: new SimpleSchema({
        surveyId: { type: String }
    }).validator(),
    run({ surveyId}) {

        const surveyResponse = {
            surveyId,
            type: 'video'
        }

        return SurveyResponses.insert(surveyResponse)
    }
})

