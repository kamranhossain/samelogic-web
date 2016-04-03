import { Mongo } from 'meteor/mongo'

import { SimpleSchema } from 'meteor/aldeed:simple-schema'

class SurveysCollection extends Mongo.Collection {
    insert(doc, callback){
        const ourDoc = doc
        ourDoc.createdAt = ourDoc.createdAt || new Date()
        return super.insert(ourDoc, callback)
    }
}

export const Surveys = new SurveysCollection('Surveys')

const SurveyResponseSchema = new SimpleSchema ({
    type: {
        type: String
    },
    contentUrl: {
        type: String,
        optional: true
    }
})

Surveys.schema = new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    description: {
        type: String,
        max: 1000
    },
    responses: {
        type: [SurveyResponseSchema]
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
})

Surveys.attachSchema(Surveys.schema)

Surveys.adminFields = {
    title: 1,
    description: 1,
    createdAt: 1
}

Surveys.publicFields = {
    title: 1,
    description: 1,
    createdAt: 1
}
