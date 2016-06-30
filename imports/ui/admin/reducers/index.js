import { combineReducers } from 'redux'
//import * as ActionTypes from '/imports/ui/surveys/actions'

import dashboard from './dashboard'
import campaigns from './campaigns'
import responses from './responses'

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
    dashboard,
    campaigns,
    responses
})

export default adminReducers