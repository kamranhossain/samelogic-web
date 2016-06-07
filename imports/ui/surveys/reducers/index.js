import { combineReducers } from 'redux'
//import * as ActionTypes from '/imports/ui/surveys/actions'

import snaps from './snaps'
import errors from './errors'
import survey from './survey'

const initialState = {
    loading: false
}

/*eslint-disable no-unused-vars*/
function state(state = initialState, action){
/*eslint-enable no-unused-vars*/
    return state
}



const surveyReducers = combineReducers({
    state,
    snaps,
    errors,
    survey
})

export default surveyReducers