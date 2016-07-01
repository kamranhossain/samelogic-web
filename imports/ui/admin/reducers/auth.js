import * as ActionTypes from '/imports/ui/admin/actions'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const initialState = {
    newSignIn: {error: null, loading: false},
    user: null,
    loggingIn: false
}

export default function(state = initialState, action) {
    const { data, type } = action
    let error
    switch (type) {
    case actionTypeBuilder.ready(ActionTypes.USER_DATA):
        return {...state, user: data }

    case actionTypeBuilder.changed(ActionTypes.USER_LOGGING_IN):
        return {...state, loggingIn: data }
    case ActionTypes.SIGNIN_USER_FAILURE:
        error = action.payload.data || {message: action.payload.message}//2nd one is network or server down errors
        return {...state, user: null, newSignIn: {error: error, loading: false}}
    default:
        return state
    }
}