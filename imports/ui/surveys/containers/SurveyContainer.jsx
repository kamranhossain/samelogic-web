import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { connect }  from 'react-redux'
import { push } from 'react-router-redux'

import Emojis from '/imports/api/surveys/collections/emojis' 

import { Surveys } from '/imports/api/surveys/collections/surveys'

import Layout from '/imports/ui/surveys/layouts/Layout.jsx'

const SurveyContainer = createContainer(({params, location}) => {
    const {surveyId} = params
    const { query } = location
    
    const surveyHandle = Meteor.subscribe('survey.public', surveyId)
    const loading = !surveyHandle.ready()
    const survey = Surveys.findOne(surveyId)
    
    const emojis = Emojis.nodes.filter((e) => e.includeInSnapsSurvey).map((e) => {
        e.selected = query && (parseInt(query.emoji) === e.value)
        return e
    })
    
    if(!loading && !survey){
        push('/404')
    }
    return {
        loading,
        survey,
        emojis,
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