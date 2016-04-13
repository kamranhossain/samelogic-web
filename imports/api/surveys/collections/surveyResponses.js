import { Mongo } from 'meteor/mongo'

import { SimpleSchema } from 'meteor/aldeed:simple-schema'

class SurveyResponsesCollection extends Mongo.Collection {
    insert(doc, callback){
        const ourDoc = doc
        ourDoc.createdAt = ourDoc.createdAt || new Date()
        return super.insert(ourDoc, callback)
    }
}

export const SurveyResponses = new SurveyResponsesCollection('SurveyResponses')

SurveyResponses.schema = new SimpleSchema ({
    surveyId: {
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
    emotionData: {
        type: Object,
        optional: true,
        blackbox: true
    },
    rawOxfordData: {
        type: Object,
        optional: true,
        blackbox: true
    }
})

SurveyResponses.attachSchema(SurveyResponses.schema)

SurveyResponses.adminFields = {
    surveyId: 1,
    type: 1,
    contentUrl: 1
}

SurveyResponses.publicFields = {
    surveyId: 1
}
