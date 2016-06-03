import * as ActionTypes from '/imports/ui/admin/actions'

const initialState = {
    selectedCampaign: undefined,
    selectedEmotion: undefined,
    emotions: [
        {
            key: 'delighted',
            label: 'Delighted',
            amount: 50,
            percent: 20,
            order: 1
        },
        {
            key: 'happiness',
            label: 'Happiness',
            amount: 50,
            percent: 20,
            order: 2
        },
        {
            key: 'neutral',
            label: 'Neutral',
            amount: 50,
            percent: 20,
            order: 3
        },
        {
            key: 'unsatisfied',
            label: 'Unsatisfied',
            amount: 50,
            percent: 20,
            order: 4
        },
        {
            key: 'disgusted',
            label: 'Disgusted',
            amount: 50,
            percent: 20,
            order: 5
        }
    ],
    feedbackFilter: {
        orderby: ''
    }
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


export default function dashboard(state = initialState, action){
    const { type } = action
    
    switch(type){
    default:
        return {...state,
            selectedCampaign: campaignSelected(state.selectedCampaign, action),
            selectedEmotion: emotionSelected(state.selectedEmotion, action)
        }
    }            
}

