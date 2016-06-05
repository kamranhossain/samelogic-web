import * as ActionTypes from '/imports/ui/admin/actions'

const initialState = {
    selectedCampaign: undefined,
    selectedEmotion: undefined,
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

