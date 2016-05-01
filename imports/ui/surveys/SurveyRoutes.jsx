import React from 'react'
import { Route } from 'react-router'

import SurveyContainer from '/imports/ui/surveys/containers/SurveyContainer.jsx'
import SnapContainer from '/imports/ui/surveys/containers/SnapContainer.jsx'
import SurveyCompleted from '/imports/ui/surveys/components/SurveyCompleted/SurveyCompleted.jsx'

import NotFound from '/imports/ui/surveys/components/404/404.jsx'

export default (
    <Route path="/surveys">
        <Route name="notFound" path="404" component={ NotFound } /> 
        <Route name="survey-routes" path=":surveyId" component={ SurveyContainer }>
            <Route name="snap" path="snap" component={ SnapContainer } /> 
            <Route name="completed" path="completed"  component={SurveyCompleted} /> 
        </Route>
    </Route>
)