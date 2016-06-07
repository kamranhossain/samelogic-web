import * as ActionTypes from '/imports/ui/surveys/actions'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'
const initialState = {
    current: undefined,
    ready: false
}

export default function(state = initialState, action) {
    const { data, ready, type } = action

    switch (type) {
    case actionTypeBuilder.ready(ActionTypes.SURVEY):
        return {...state, ready}

    case actionTypeBuilder.changed(ActionTypes.SURVEY):
        return {...state, current: data}
    default:
        return state
    }
}