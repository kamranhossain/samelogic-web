import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Surveys } from '../collections/surveys'
import { SurveyResponses } from '../collections/surveyResponses'


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

Meteor.publish('campaigns.admin', () => {
    return Surveys.find({},{
        fields: Surveys.adminFields
    })    
})


Meteor.publish('surveyResponses.admin', (surveyId, emotionKey) => {
    new SimpleSchema({
        surveyId: { type: String },
        emotionKey: {type: String}
        
    }).validate({surveyId, emotionKey})
    const query = {
        surveyId: surveyId
    }
    return SurveyResponses.find(query,{
        fields: SurveyResponses.adminFields
    })
    //TODO: complete implementation
})