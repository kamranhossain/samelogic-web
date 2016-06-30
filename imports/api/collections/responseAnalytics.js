
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const EmojiStats = new SimpleSchema({
    emoji: {
        type: Number
    },
    rank: {
        type: Number,
        defaultValue: 0,
        min: 0
    }
})
export const ResponseAnalytics = new SimpleSchema({
    primaryEmoji: {
        type: Number,
        optional: true
    },
    emojis: {
        type: [EmojiStats],
        optional: true
    }
})