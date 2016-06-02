import { Surveys } from '/imports/api/surveys/collections/surveys'

export default function createCampaignIndex(){   
    Surveys._ensureIndex({
        title: 'text'
    })
}