import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Campaigns } from '../collections/campaigns'
import { Responses } from '../collections/responses'


Meteor.publish('campaign.public', (campaignId) => {
    new SimpleSchema({
        campaignId: { type: String }
    }).validate({campaignId})
    
    const query = {
        _id: campaignId
    }
    
    return Campaigns.find(query, {
        fields: Campaigns.publicFields
    })    
})

Meteor.publish('campaigns.admin', () => {
    return Campaigns.find({},{
        fields: Campaigns.adminFields
    })    
})

Meteor.publish('campaign.analytics', (campaignId) => {
    new SimpleSchema({
        campaignId: { type: String }
    }).validate({campaignId})
    const query = {
        _id: campaignId
    }
    return Campaigns.find(query,{
        fields: Campaigns.analyticsFields
    })    
})


Meteor.publish('responses.admin', (campaignId, emotionKey) => {
    new SimpleSchema({
        campaignId: { type: String },
        emotionKey: {type: String}
        
    }).validate({campaignId, emotionKey})
    const query = {
        campaignId: campaignId,
        '': emotionKey
    }
    return Responses.find(query,{
        fields: Responses.adminFields
    })
    //TODO: complete implementation
})