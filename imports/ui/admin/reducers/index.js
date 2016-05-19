import { combineReducers } from 'redux'
//import * as ActionTypes from '/imports/ui/surveys/actions'

import dashboard from './dashboard'

const initialState = {
    loading: false
}

/*eslint-disable no-unused-vars*/
function state(state = initialState, action){
/*eslint-enable no-unused-vars*/
    return state
}



const adminReducers = combineReducers({
    state,
    dashboard
})

export default adminReducers