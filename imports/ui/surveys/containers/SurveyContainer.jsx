import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { connect }  from 'react-redux'
import { push } from 'react-router-redux'

import { Surveys } from '/imports/api/surveys/collections/surveys'

import emojiSelected from '/imports/ui/surveys/actions/emojiSelected'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'

const SurveyContainer = createContainer(({params, location, emojiSelected}) => {
    const {surveyId} = params
    const { query } = location
    
    const surveyHandle = Meteor.subscribe('survey.public', surveyId)
    const loading = !surveyHandle.ready()
    const survey = Surveys.findOne(surveyId)
    
    
    if(!loading && !survey){
        push('/404')
    }
    if(!loading){
        emojiSelected((query && query.emoji) ? parseInt(query.emoji) : 0)
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
        emojiSelected: (selectedEmojiValue) => dispatch(emojiSelected(selectedEmojiValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)