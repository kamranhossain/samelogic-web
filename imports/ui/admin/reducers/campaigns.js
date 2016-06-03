import * as ActionTypes from '/imports/ui/admin/actions'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'
const initialState = {
    current: undefined,
    ready: false,
    items: []
}

export default function(state = initialState, action) {
    const { data, ready, type } = action

    switch (type) {
    case actionTypeBuilder.ready(ActionTypes.CAMPAIGNS):
        return {...state, ready}

    case actionTypeBuilder.changed(ActionTypes.CAMPAIGNS):
        return {...state, items: data}
    default:
        return state
    }
}