import * as ActionTypes from '/imports/ui/admin/actions'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const initialState = {
    user: null,
    loggingIn: false
}

export default function(state = initialState, action) {
    const { data, type } = action

    switch (type) {
    case actionTypeBuilder.changed(ActionTypes.USER_DATA):
        return {...state, user: data }

    case actionTypeBuilder.changed(ActionTypes.USER_LOGGING_IN):
        return {...state, loggingIn: data }

    default:
        return state
    }
}