import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

//import * as adminReducers from 'imports/ui/admin/AdminReducers'
import surveyReducers from '/imports/ui/surveys/reducers'

import AdminRoutes from '/imports/ui/admin/AdminRoutes.jsx'
import SurveyRoutes from '/imports/ui/surveys/SurveyRoutes.jsx'
import AppContainer from '/imports/ui/app/AppContainer.jsx'

const reducer = combineReducers({
    //...adminReducers,
    surveys: surveyReducers,
    routing: routerReducer
})

const logger = createLogger()
const store = createStore(reducer, {}, compose(
    applyMiddleware(ReduxThunk, logger, routerMiddleware(browserHistory)), 
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
