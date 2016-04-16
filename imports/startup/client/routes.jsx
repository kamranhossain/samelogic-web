import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import DevTools from 'meteor/samelogic-devtools'

//import * as adminReducers from 'imports/ui/admin/AdminReducers'
import surveyReducers from '/imports/ui/surveys/reducers'

import AdminRoutes from '/imports/ui/admin/AdminRoutes.jsx'
import SurveyRoutes from '/imports/ui/surveys/SurveyRoutes.jsx'
import AppContainer from '/imports/ui/app/AppContainer.jsx'

const reducer = combineReducers({
    //...adminReducers,
    surveying: surveyReducers,
    routing: routerReducer
})

let isDev = typeof DevTools.instrument === 'function'
const logger = createLogger()
const store = isDev ? createStore(reducer, DevTools.instrument(), applyMiddleware(ReduxThunk, logger)) : createStore(reducer, {}, applyMiddleware(ReduxThunk, logger))

const history = syncHistoryWithStore(browserHistory, store)

var devTools = isDev ? <DevTools /> : null

export const renderRoutes = () => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/">
            {AdminRoutes}
            {SurveyRoutes}
            <IndexRoute component={ AppContainer } />
        </Route>
      </Router>
      {devTools}
    </div>
  </Provider>
)
