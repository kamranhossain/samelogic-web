import { Meteor } from 'meteor/meteor'
import { newErrorNotification } from '/imports/ui/app/actions/notifications'
import { Campaigns } from '/imports/api/collections/campaigns'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const CAMPAIGN = actionTypeBuilder.type('CAMPAIGN')
export const CAMPAIGNS = actionTypeBuilder.type('CAMPAIGNS')
export const CAMPAIGNS_REMOVE = actionTypeBuilder.type('CAMPAIGNS_REMOVE')
export const CAMPAIGNS_INSERT = actionTypeBuilder.type('CAMPAIGNS_INSERT')
export const CAMPAIGNS_UPDATE = actionTypeBuilder.type('CAMPAIGNS_UPDATE')

export function loadCampaignsFactory() {
    return () => {
        return dispatch => {
            dispatch({
                type: CAMPAIGNS,
                meteor: {
                    subscribe: () => Meteor.subscribe('campaigns.admin', {
                        onStop: error => {
                            if (error && error.error === 401) {
                                dispatch(newErrorNotification('failed to load campaigns'))
                            }
                        }
                    }),
                    get: () => Campaigns.find({}).fetch()
                }
            })
        }
    }
}
export function loadCampaignAnalyticsFactory() {
    return (campaignId) => {
        return dispatch => {
            dispatch({
                type: CAMPAIGN,
                meteor: {
                    subscribe: () => Meteor.subscribe('campaign.analytics', campaignId, {
                        onStop: error => {
                            if (error && error.error === 401) {
                                dispatch(newErrorNotification('failed to load campaign analytics'))
                            }
                        }
                    }),
                    get: () => Campaigns.findOne(campaignId)
                }
            })
        }
    }
}
export function deleteCampaignFactory(collection) {
    return id => {
        return dispatch => {
            dispatch({
                type: CAMPAIGNS_REMOVE,
                meteor: {
                    remove: {
                        id,
                        collection
                    }
                }
            })
        }
    }
}

export function newCampaignFactory(collection) {
    return (type, name, date) => {
        return dispatch => {
            dispatch({
                type: CAMPAIGNS_INSERT,
                meteor: {
                    insert: {
                        entity: {
                            date,
                            name,
                            type
                        },
                        collection
                    }
                }
            })
        }
    }
}

export function updateCampaignFactory(collection) {
    return (id, date) => {
        return dispatch => {
            dispatch({
                type: CAMPAIGNS_UPDATE,
                meteor: {
                    update: {
                        id,
                        modifiers: {
                            $set: {
                                date: date
                            }
                        },
                        collection
                    }
                }
            })
        }
    }
}

