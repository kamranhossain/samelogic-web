import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import DevTools from 'meteor/samelogic-devtools'

//import * as adminReducers from 'imports/ui/admin/AdminReducers'
import AdminAppContainer from '/imports/ui/admin/containers/AdminAppContainer.jsx'

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
        <Route path="/admin" component={AdminAppContainer}>
        </Route>
      </Router>
      {devTools}
    </div>
  </Provider>
)
