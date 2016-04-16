import { combineReducers } from 'redux'
import * as ActionTypes from '/imports/ui/surveys/actions'

import snaps from './snaps'

const initialState = {
}


function state(state = initialState, action){
    return state
}



const surveyReducers = combineReducers({
    state,
    snaps
})

export default surveyReducers