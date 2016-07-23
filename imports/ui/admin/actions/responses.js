import { Meteor } from 'meteor/meteor'
import { newErrorNotification } from '/imports/ui/app/actions/notifications'
import { Responses } from '/imports/api/collections/responses'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const RESPONSES = actionTypeBuilder.type('RESPONSES')
export const RESPONSE_SELECTED = 'RESPONSE_SELECTED'

export function responseSelected(selectedResponse) {
    return {
        type: RESPONSE_SELECTED,
        selectedResponse        
    }
}
export function loadResponsesFactory() {
    return (campaignId, emoji) => {
        return dispatch => {
            dispatch({
                type: RESPONSES,
                meteor: {
                    subscribe: () => Meteor.subscribe('responses.admin', campaignId, emoji, {
                        onStop: error => {
                            if (error && error.error === 401) {
                                dispatch(newErrorNotification('failed to load campaigns'))
                            }
                        }
                    }),
                    get: () => Responses.find({}).fetch()
                }
            })
        }
    }
}

