import { combineReducers } from 'redux'
//import * as ActionTypes from '/imports/ui/surveys/actions'

import snaps from './snaps'

const initialState = {
}

/*eslint-disable no-unused-vars*/
function state(state = initialState, action){
/*eslint-enable no-unused-vars*/
    return state
}



const surveyReducers = combineReducers({
    state,
    snaps
})

export default surveyReducers