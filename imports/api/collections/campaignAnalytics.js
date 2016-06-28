
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import Emojis from '/imports/api/collections/emojis'

export const EmojiStats = new SimpleSchema({
    emoji: {
        type: Number
    },
    count: {
        type: Number,
        defaultValue: 0,
        min: 0
    }
})
export const CampaignAnalytics = new SimpleSchema({
    responses: {
        type: Number,
        defaultValue: 0,
        min: 0
    },
    emojis: {
        type: [EmojiStats],
        defaultValue: defaultEmojis()
    }
})

function defaultEmojis(){
    return Emojis.values().map((e) => {
        return {emoji: e}
    })
}