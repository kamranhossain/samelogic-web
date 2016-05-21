import * as ActionTypes from '/imports/ui/admin/actions'

const initialState = {
    selectedCampaign: undefined,
    campaigns: [{_id:'1', title: 'Customer Calls'}, {_id:'2', title:'Some other Campaign'}],
    selectedEmotion: undefined,
    emotions: [
        {
            key: 'delighted',
            label: 'Delighted',
            percent: 20,
            order: 1
        },
        {
            key: 'happiness',
            label: 'Happiness',
            percent: 20,
            order: 2
        },
        {
            key: 'neutral',
            label: 'Neutral',
            percent: 20,
            order: 3
        },
        {
            key: 'unsatisfied',
            label: 'Unsatisfied',
            percent: 20,
            order: 4
        },
        {
            key: 'disgusted',
            label: 'Disgusted',
            percent: 20,
            order: 5
        }
    ],
    feedbackFilter: {
        orderby: ''
    },
    feedbacks: []
}


function campaignSelected(state = initialState.selectedCampaign, action){
    const { type, selectedCampaign } = action
    if(type === ActionTypes.CAMPAIGN_SELECTED){
        return selectedCampaign 
    }
    return state
}

function emotionSelected(state = initialState.selectedEmotion, action){
    const { type, selectedEmotion } = action
    if(type === ActionTypes.EMOTION_SELECTED){
        return selectedEmotion 
    }
    return state
}

function loadFeedbacks(state = initialState.feedbacks, action){
    const { type, feedbacks } = action
    if(type === ActionTypes.LOAD_CAMPAIGN_FEEDBACKS){
        return feedbacks 
    }
    return state    
}

export default function dashboard(state = initialState, action){
    const { type } = action
    
    switch(type){
    default:
        return {...state,
            selectedCampaign: campaignSelected(state.selectedCampaign, action),
            selectedEmotion: emotionSelected(state.selectedEmotion, action),
            feedbacks: loadFeedbacks(state.feedbacks, action)
        }
    }            
}

