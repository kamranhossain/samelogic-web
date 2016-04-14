import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import DevTools from 'meteor/samelogic-devtools'

//import * as adminReducers from 'imports/ui/admin/AdminReducers'
import AdminRoutes from '/imports/ui/admin/AdminRoutes.jsx'
import SurveyRoutes from '/imports/ui/surveys/SurveyRoutes.jsx'
import AppContainer from '/imports/ui/app/AppContainer.jsx'

const reducer = combineReducers({
    //...adminReducers,
    routing: routerReducer
})

let isDev = typeof DevTools.instrument === 'function'

const store = isDev ? createStore(reducer, DevTools.instrument()) : createStore(reducer)

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
