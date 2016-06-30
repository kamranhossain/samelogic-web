import createCampaignIndex from './campaigns'
import createResponseIndex from './responses'

export default function createIndexes(){
    createCampaignIndex()
    createResponseIndex()
}