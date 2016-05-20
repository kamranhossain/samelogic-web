export const CAMPAIGN_SELECTED = 'CAMPAIGN_SELECTED'

export function campaignSelected(selectedCampaign) {
    return {
        type: CAMPAIGN_SELECTED,
        selectedCampaign       
    }
}