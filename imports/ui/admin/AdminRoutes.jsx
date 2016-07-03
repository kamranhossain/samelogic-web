import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import AdminContainer from '/imports/ui/admin/containers/AdminContainer.jsx'
import DashboardAppContainer from '/imports/ui/admin/containers/dashboard/DashboardAppContainer.jsx'
import AuthAppContainer from '/imports/ui/admin/containers/auth/AuthAppContainer.jsx'

import Dashboard from '/imports/ui/admin/pages/Dashboard.jsx'
import CreateCampaign from '/imports/ui/admin/pages/CreateCampaign.jsx'
import SignIn from '/imports/ui/admin/pages/SignIn.jsx'
import Campaigns from '/imports/ui/admin/pages/Campaigns.jsx'



// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.admin.auth.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
    failureRedirectPath: '/admin/signin'
})

export default (
  <Route name="admin-routes" path="/admin" component={ AdminContainer }>
    <Route component={UserIsAuthenticated(DashboardAppContainer)}>
      <IndexRoute component={ Dashboard } />
      <Route path="campaigns">
        <IndexRoute component={Campaigns} />
        <Route path="create" component={CreateCampaign} />
      </Route>
    </Route>

    <Route component={AuthAppContainer}>
      <Route path="signin" component={ SignIn } />
    </Route>
    
  </Route>
)