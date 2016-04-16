import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { connect }  from 'react-redux'
import { push } from 'react-router-redux'

import { Surveys } from '/imports/api/surveys/collections/surveys'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'

const SurveyContainer = createContainer(({params}) => {
    const {surveyId} = params
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

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)