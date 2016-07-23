import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Campaigns } from '../collections/campaigns'
import { Responses } from '../collections/responses'

export default new ValidatedMethod({
    name: 'surveys.createResponse',
    validate: new SimpleSchema({
        campaignId: { type: String },
        emoji: { type: Number},
        type: { type: String, allowedValues: ['video']}
    }).validator(),
    run({ campaignId, emoji, type}) {

        Campaigns.update(
            {
                _id: campaignId,
                'analytics.emojis.emoji': emoji
            }, 
            { 
                $inc: {
                    'analytics.totalResponses': 1,
                    'analytics.emojis.$.count': 1 
                }
            }
        )

        const response = {
            campaignId,
            emoji,
            type: type
        }

        return Responses.insert(response)
    }
})

