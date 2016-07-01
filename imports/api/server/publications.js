import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Campaigns } from '../collections/campaigns'
import { Responses } from '../collections/responses'

Meteor.publish('userData', () => {
    return Meteor.users.find({_id: this.userId})
})

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


Meteor.publish('responses.admin', (campaignId, emoji) => {
    new SimpleSchema({
        campaignId: { type: String },
        emoji: {type: Number}
        
    }).validate({campaignId, emoji})
    const query = {
        campaignId: campaignId,
        'analytics.primaryEmoji': emoji
    }
    return Responses.find(query,{
        fields: Responses.adminFields
    })
    //TODO: complete implementation
})