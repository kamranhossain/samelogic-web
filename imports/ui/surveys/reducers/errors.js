import * as ActionTypes from '/imports/ui/surveys/actions'

const initialState = {
    type: undefined,
    errorMessage: '',
    hasError: false
}

export default function errors(state = initialState, action){
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return {
            type: undefined,
            errorMessage: '',
            hasError: false    
        }
    } else if (error) {
        return {
            type: type,
            errorMessage: error,
            hasError: true
        }
    }

    return state
}