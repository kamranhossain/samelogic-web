export const LOAD_CAMPAIGN_FEEDBACKS = 'LOAD_CAMPAIGN_FEEDBACKS'

function loadFeedbacks(feedbacks){
    return{
        type: LOAD_CAMPAIGN_FEEDBACKS,
        feedbacks
    }
}

export function loadCampaignFeedbacks() {
    return (dispatch, getState) => {
    
    }
}