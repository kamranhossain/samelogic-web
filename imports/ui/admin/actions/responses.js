import { Meteor } from 'meteor/meteor'
import { newErrorNotification } from '/imports/ui/app/actions/notifications'
import { Responses } from '/imports/api/collections/responses'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const RESPONSES = actionTypeBuilder.type('RESPONSES')

export function loadResponsesFactory() {
    return () => {
        return dispatch => {
            dispatch({
                type: RESPONSES,
                meteor: {
                    subscribe: () => Meteor.subscribe('responses.admin', {
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

