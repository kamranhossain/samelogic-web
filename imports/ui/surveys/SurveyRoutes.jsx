import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'
import SurveysAppContainer from '/imports/ui/surveys/app/SurveysAppContainer.jsx'

export default (
  <Route name="admin-routes" path="/surveys" component={ Layout }>
    <Route name="home" component={ SurveysAppContainer } />
    <IndexRoute component={ SurveysAppContainer } />
  </Route>
)