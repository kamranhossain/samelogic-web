import { Meteor } from 'meteor/meteor'
import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const USER_LOGGING_IN = actionTypeBuilder.type('USER_LOGGING_IN')
export const USER_DATA = actionTypeBuilder.type('USER_DATA')

export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE'

export function signInUserFailure(error) {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    }
}

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
    return () => {
        return new Promise((resolve, reject) => {
            Meteor.loginWithPassword(email, password, err => {
                if (err) {
                    reject(err)
                }
                else{
                    resolve()
                }
            })
        })
        
    }
}
