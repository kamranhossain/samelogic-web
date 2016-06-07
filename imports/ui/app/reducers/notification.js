
import { NEW_NOTIFICATION, CLEAR_NOTIFICATION } from '/imports/ui/app/actions/notifications'

export const initialState = {
    level: null,
    message: null
}

export default function(state = initialState, action) {
    const { level, message, type } = action

    switch (type) {
    case NEW_NOTIFICATION:
        return {...state, level, message }

    case CLEAR_NOTIFICATION:
        return {...state, level: null, message: null }

    default:
        return state
    }
}