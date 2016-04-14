import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { connect }  from 'react-redux'
import { push } from 'react-router-redux'

import { Surveys } from '/imports/api/surveys/collections/surveys'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'

const SurveyContainer = createContainer(({params: {surveyId}}) => {
    const surveyHandle = Meteor.subscribe('survey.public', surveyId)
    const loading = !surveyHandle.ready()
    const survey = Surveys.findOne(surveyId)
    if(!loading && !survey){
        push('/404')
    }
    return {
        loading,
        survey,
        connected: Meteor.status().connected
    }
}, Layout)


export default connect()(SurveyContainer)