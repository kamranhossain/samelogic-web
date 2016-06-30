import { Mongo } from 'meteor/mongo'

import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import emojiAutovalue from '/imports/api/collections/common/emojiAutovalue'

class ResponsesCollection extends Mongo.Collection {
    insert(doc, callback){
        const ourDoc = doc
        ourDoc.createdAt = ourDoc.createdAt || new Date()
        return super.insert(ourDoc, callback)
    }
}

export const Responses = new ResponsesCollection('Responses',{
    transform: (doc) => {
        return doc
    }
})

Responses.schema = new SimpleSchema ({
    campaignId: {
        type: String
    },
    type: {
        type: String
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    },
    contentUrl: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    textResponse: {
        type: String,
        optional: true  
    },
    emotionData: {
        type: Object,
        optional: true,
        blackbox: true
    },
    rawOxfordData: {
        type: Object,
        optional: true,
        blackbox: true
    },
    emoji: {
        type: Number,
        optional: true,
        autoValue: emojiAutovalue
    }
})

Responses.attachSchema(Responses.schema, {transform: true})

Responses.adminFields = {
    campaignId: 1,
    type: 1,
    contentUrl: 1,
    textResponse: 1,
    emoji: 1,
    emotionData: 1,
    createdAt: 1
}

Responses.publicFields = {
    campaignId: 1
}
