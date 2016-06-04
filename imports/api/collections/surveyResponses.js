import { Mongo } from 'meteor/mongo'

import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import Emojis from './emojis'

class SurveyResponsesCollection extends Mongo.Collection {
    insert(doc, callback){
        const ourDoc = doc
        ourDoc.createdAt = ourDoc.createdAt || new Date()
        return super.insert(ourDoc, callback)
    }
}

export const SurveyResponses = new SurveyResponsesCollection('CampaignResponses',{
    transform: (doc) => {
        return doc
    }
})

SurveyResponses.schema = new SimpleSchema ({
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
    emoji:{
        type: Number,
        optional: true,
        autoValue: function(){            
            const autoFormField = this.field('emoji')
            if(!autoFormField.isSet){
                this.unset()
                return
            }
            const emoji = Emojis.value(autoFormField.value)
            if(typeof emoji === 'undefined'){
                this.unset()
                return
            }
            return emoji
        }
    }
})

SurveyResponses.attachSchema(SurveyResponses.schema, {transform: true})

SurveyResponses.adminFields = {
    campaignId: 1,
    type: 1,
    contentUrl: 1,
    textResponse: 1,
    emoji: 1,
    emotionData: 1,
    createdAt: 1
}

SurveyResponses.publicFields = {
    campaignId: 1
}
