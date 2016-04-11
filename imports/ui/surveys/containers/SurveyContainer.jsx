import { Meteor } from 'meteor/meteor'

import { createContainer } from 'meteor/react-meteor-data'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'

export default createContainer(({params: {surveyId}}) => {
    console.log('id: '+ surveyId)
    return {
        loading: false,
        connected: Meteor.status().connected
    }
}, Layout)