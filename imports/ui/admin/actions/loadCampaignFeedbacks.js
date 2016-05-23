import { Meteor } from 'meteor/meteor'
import { Surveys } from '/imports/api/surveys/collections/surveys'

export const LOAD_CAMPAIGN_FEEDBACKS = 'LOAD_CAMPAIGN_FEEDBACKS'

function loadFeedbacks(feedbacks){
    return{
        type: LOAD_CAMPAIGN_FEEDBACKS,
        feedbacks
    }
}

export function loadCampaignFeedbacks() {
    return (dispatch, getState) => {
        getState()
        loadFeedbacks()
    }
}