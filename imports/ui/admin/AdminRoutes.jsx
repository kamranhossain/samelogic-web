import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AdminContainer from '/imports/ui/admin/containers/AdminContainer.jsx'
import DashboardContainer from '/imports/ui/admin/containers/DashboardContainer.jsx'
import CreateCampaignContainer from '/imports/ui/admin/containers/CreateCampaignContainer.jsx'

export default (
  <Route name="admin-routes" path="/admin" component={ AdminContainer }>
    <Route path="create" component={CreateCampaignContainer} />
    <IndexRoute component={ DashboardContainer } />
  </Route>
)