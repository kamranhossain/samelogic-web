
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import emojiAutovalue from '/imports/api/collections/common/emojiAutovalue'

export const EmojiStats = new SimpleSchema({
    emoji: {
        type: Number,
        autoValue: emojiAutovalue    
    },
    count: {
        type: Number,
        defaultValue: 0,
        min: 0
    }
})
export const CampaignAnalytics = new SimpleSchema({
    emojis: {
        type: [EmojiStats]
    }
})
