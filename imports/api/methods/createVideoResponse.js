import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Campaigns } from '../collections/campaigns'
import { Responses } from '../collections/responses'

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

        const response = {
            campaignId,
            emoji,
            type: 'video'
        }

        return Responses.insert(response)
    }
})

