import { Mongo } from 'meteor/mongo'

import { SimpleSchema } from 'meteor/aldeed:simple-schema'

class CampaignsCollection extends Mongo.Collection {
    insert(doc, callback){
        const ourDoc = doc
        ourDoc.createdAt = ourDoc.createdAt || new Date()
        return super.insert(ourDoc, callback)
    }
}

export const Campaigns = new CampaignsCollection('Campaigns')

Campaigns.schema = new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    description: {
        type: String,
        max: 1000
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
})

Campaigns.attachSchema(Campaigns.schema)

Campaigns.adminFields = {
    _id: 1,
    title: 1,
    description: 1,
    createdAt: 1
}

Campaigns.publicFields = {
    _id: 1,
    title: 1,
    description: 1,
    createdAt: 1
}
