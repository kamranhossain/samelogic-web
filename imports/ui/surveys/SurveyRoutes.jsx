import React from 'react'
import { Route } from 'react-router'

import SurveyAppContainer from '/imports/ui/surveys/containers/SurveyAppContainer.jsx'
import SnapContainer from '/imports/ui/surveys/containers/SnapContainer.jsx'
import SnapsNew from '/imports/ui/surveys/pages/SnapsNew.jsx'
import SurveyCompleted from '/imports/ui/surveys/components/SurveyCompleted/SurveyCompleted.jsx'

import NotFound from '/imports/ui/surveys/components/404/404.jsx'

export default (
    <Route name="survey-routes" path="/surveys" component={ SurveyAppContainer }>
        <Route name="notFound" path="404" component={ NotFound } /> 
        <Route name="survey-routes" path=":surveyId">
            <Route name="snap" path="snap" component={ SnapContainer } /> 
            <Route name="snap-new" path="snap-new" component={ SnapsNew } /> 
            <Route name="completed" path="completed"  component={SurveyCompleted} /> 
        </Route>
    </Route>
)