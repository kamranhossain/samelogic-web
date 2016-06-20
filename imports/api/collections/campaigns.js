import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import findCampaignsByName from './campaigns/findCampaignsByName'

class CampaignsCollection extends Mongo.Collection {
    insert(doc, callback){
        const ourDoc = doc
        ourDoc.createdAt = ourDoc.createdAt || new Date()
        return super.insert(ourDoc, callback)
    }
}

export const Campaigns = new CampaignsCollection('Campaigns')

const IdentitySchema = new SimpleSchema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    organisation: {
        type: String
    },
    photoUri: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    }
})

Campaigns.schema = new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    description: {
        type: String,
        max: 1000
    },
    identity: {
        type: IdentitySchema
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
})

Campaigns.attachSchema(Campaigns.schema)

Campaigns.findCampaignsByName = findCampaignsByName(Campaigns)

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
    identity: 1,
    createdAt: 1
}
