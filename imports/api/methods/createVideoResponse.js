import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Campaigns } from '../collections/campaigns'
import { SurveyResponses } from '../collections/surveyResponses'

export default new ValidatedMethod({
    name: 'surveys.createVideoResponse',
    validate: new SimpleSchema({
        campaignId: { type: String },
        emoji: { type: Number}
    }).validator(),
    run({ campaignId, emoji}) {

        Campaigns.update(
            {
                _id: campaignId
            }, 
            { 
                $inc: {
                    'analytics.totalResponses': 1
                }
            }
        )

        const surveyResponse = {
            campaignId,
            emoji,
            type: 'video'
        }

        return SurveyResponses.insert(surveyResponse)
    }
})

