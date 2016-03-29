import { Meteor } from 'meteor/meteor'

import { Surveys } from '../surveys'

Meteor.publish('survey.public', (surveyId) => {
    //TODO: Add simpleschema validation of surveyId here.
    
    const query = {
        _id: surveyId
    }
    
    return Surveys.findOne(query, {
        fields: Surveys.publicFields
    })    
})