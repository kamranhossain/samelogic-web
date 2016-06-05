import * as AdminActions from '/imports/ui/admin/actions'

export const CAMPAIGN_SELECTED = 'CAMPAIGN_SELECTED'



export function campaignSelected(selectedCampaign) {
    return (dispatch, state) => {
        dispatch({
            type: CAMPAIGN_SELECTED,
            selectedCampaign  
        })
        dispatch(AdminActions.loadEmotionsFactory()(selectedCampaign._id))
    }
}