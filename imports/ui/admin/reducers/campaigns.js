import * as ActionTypes from '/imports/ui/admin/actions'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'
const initialState = {
    emojiStats: undefined,
    current: undefined,
    ready: false,
    items: []
}

export default function(state = initialState, action) {
    const { data, ready, type } = action

    switch (type) {
    case actionTypeBuilder.ready(ActionTypes.CAMPAIGNS):
        return {...state, ready, items: data}
    case actionTypeBuilder.changed(ActionTypes.CAMPAIGNS):
        return {...state, items: data}
    case actionTypeBuilder.changed(ActionTypes.CAMPAIGN):
        return {...state, current: data}
    case ActionTypes.EMOJI_STATS_SELECTED:
        return {...state, emojiStats: data}
    default:
        return state
    }
}