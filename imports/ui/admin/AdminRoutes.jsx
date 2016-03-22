import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from '/imports/ui/admin/layouts/Layout.jsx'
import AdminAppContainer from '/imports/ui/admin/app/AdminAppContainer.jsx'

export default (
  <Route name="admin-routes" path="/admin" component={ Layout }>
    <Route name="home" component={ AdminAppContainer } />
    <IndexRoute component={ AdminAppContainer } />
  </Route>
)