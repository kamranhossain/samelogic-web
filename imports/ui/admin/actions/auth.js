import { Meteor } from 'meteor/meteor'
import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'
import { newErrorNotification } from '/imports/ui/app/actions'

export const USER_LOGGING_IN = actionTypeBuilder.type('USER_LOGGING_IN')
export const USER_DATA = actionTypeBuilder.type('USER_DATA')

export function loadUser() {
    return dispatch => {
        dispatch({
            type: USER_LOGGING_IN,
            meteor: {
                get: () => Meteor.loggingIn()
            }
        })

        dispatch({
            type: USER_DATA,
            meteor: {
                subscribe: () => Meteor.subscribe('userData'),
                get: () => Meteor.user()
            }
        })
    }
}
export function loginWithPassword(email, password) {
    return dispatch => {
        Meteor.loginWithPassword(email, password, err => {
            if (err) {
                return dispatch(newErrorNotification('Error authenticating user.'))
            }
        })
    }
}
