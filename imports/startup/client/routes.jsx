import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import adminReducers from '/imports/ui/admin/reducers'
import surveyReducers from '/imports/ui/surveys/reducers'

import AdminRoutes from '/imports/ui/admin/AdminRoutes.jsx'
import SurveyRoutes from '/imports/ui/surveys/SurveyRoutes.jsx'
import AppContainer from '/imports/ui/app/AppContainer.jsx'

import { meteorInsert, meteorUpdate, meteorRemove, meteorDataSource, meteorSubscription, meteorMethod } from 'meteor/shawnmclean:redux-meteorware'

const reducer = combineReducers({
    admin: adminReducers,
    surveys: surveyReducers,
    routing: routerReducer
})

const logger = createLogger()
const middlewares = [
    ReduxThunk,
    logger,
    routerMiddleware(browserHistory),
    meteorInsert,
    meteorUpdate,
    meteorRemove,
    meteorDataSource,
    meteorSubscription,
    meteorMethod
]

const store = createStore(reducer, {}, compose(
    applyMiddleware(...middlewares), 
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

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
    </div>
  </Provider>
)
