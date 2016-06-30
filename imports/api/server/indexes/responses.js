import { Responses } from '/imports/api/collections/responses'

export default function createResponseIndex(){   
    Responses._ensureIndex({
        'analytics.primaryEmoji': 1
    })
}