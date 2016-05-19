export const CAMPAIGN_SELECTED = 'CAMPAIGN_SELECTED'

export function campaignSelected(selectedCampaignValue) {
    return {
        type: CAMPAIGN_SELECTED,
        selectedCampaignValue        
    }
}