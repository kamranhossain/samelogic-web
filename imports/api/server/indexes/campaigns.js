import { Campaigns } from '/imports/api/collections/campaigns'

export default function createCampaignIndex(){   
    Campaigns._ensureIndex({
        title: 'text'
    })
}