import { combineReducers } from 'redux'
//import * as ActionTypes from '/imports/ui/surveys/actions'

import snaps from './snaps'
import errors from './errors'
import survey from './survey'
import emojis from './emojis'

const surveyReducers = combineReducers({
    snaps,
    errors,
    survey,
    emojis
})

export default surveyReducers