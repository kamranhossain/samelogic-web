import { Meteor } from 'meteor/meteor'
import { newErrorNotification } from '/imports/ui/app/actions'
import { Campaigns } from '/imports/api/collections/campaigns'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const SURVEY = actionTypeBuilder.type('SURVEY')

export function loadSurveyFactory() {
    return (surveyId) => {
        return dispatch => {
            dispatch({
                type: SURVEY,
                meteor: {
                    subscribe: () => Meteor.subscribe('campaign.public', surveyId, {
                        onStop: error => {
                            if (error && error.error === 401) {
                                dispatch(newErrorNotification('failed to load campaigns'))
                            }
                        }
                    }),
                    get: () => Campaigns.findOne(surveyId)
                }
            })
        }
    }
}
