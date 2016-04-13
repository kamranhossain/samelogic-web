import { Meteor } from 'meteor/meteor'

import { createContainer } from 'meteor/react-meteor-data'

import { Surveys } from '/imports/api/surveys/collections/surveys'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'

export default createContainer(({params: {surveyId}}) => {
    const surveyHandle = Meteor.subscribe('survey.public', surveyId)
    const loading = !surveyHandle.ready()
    const survey = Surveys.findOne(surveyId)
    return {
        loading,
        survey,
        connected: Meteor.status().connected
    }
}, Layout)