import React from 'react'
import { Route } from 'react-router'

import SurveyContainer from '/imports/ui/surveys/containers/SurveyContainer.jsx'

import SnapPage from '/imports/ui/surveys/components/SnapPage/SnapPage.jsx'

export default (
  <Route name="survey-routes" path="/surveys/:surveyId" component={ SurveyContainer }>
    <Route name="snap" path="snap" component={ SnapPage } />
  </Route>
)