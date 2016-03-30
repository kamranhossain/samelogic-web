import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Surveys } from '../surveys'

Meteor.publish('survey.public', (surveyId) => {
    new SimpleSchema({
        surveyId: { type: String }
    }).validate({surveyId})
    
    const query = {
        _id: surveyId
    }
    
    return Surveys.findOne(query, {
        fields: Surveys.publicFields
    })    
})