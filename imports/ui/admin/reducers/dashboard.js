import * as ActionTypes from '/imports/ui/admin/actions'

const initialState = {
    selectedCampaign: undefined,
    campaigns: []
}


function campaignSelected(state = initialState.selectedCampaign, action){
    const { type, selectedCampaign } = action
    if(type === ActionTypes.CAMPAIGN_SELECTED){
        return { selectedCampaign }
    }
    return state
}

export default function dashboard(state = initialState, action){
    const { type } = action
    
    switch(type){
    default:
        return {...state,
            selectedCampaign: campaignSelected(state.selectedCampaign, action)
        }
    }            
}

