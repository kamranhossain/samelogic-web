import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Surveys } from '../collections/surveys'

Meteor.publish('survey.public', (surveyId) => {
    new SimpleSchema({
        surveyId: { type: String }
    }).validate({surveyId})
    
    const query = {
        _id: surveyId
    }
    
    return Surveys.find(query, {
        fields: Surveys.publicFields
    })    
})