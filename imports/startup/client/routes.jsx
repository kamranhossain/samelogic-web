
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//import * as adminReducers from 'imports/ui/admin/AdminReducers'
import AdminAppContainer from '/imports/ui/admin/containers/AdminAppContainer.jsx'

const reducer = combineReducers({
  //...adminReducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)
const history = syncHistoryWithStore(browserHistory, store)

export const renderRoutes = () => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={AdminAppContainer}>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>
)
