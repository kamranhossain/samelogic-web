/* eslint-disable no-console */
import { Slingshot } from 'meteor/edgee:slingshot'

import { createVideoResponse, updateVideoResponseUrl } from '/imports/api/surveys/methods'

export const SET_CREATE_SURVEY_RESPONSE_ERROR = 'SET_CREATE_SURVEY_RESPONSE_ERROR'
export const SNAP_SAVING = 'SNAP_SAVING'

function setSnapSaving(saving) {
    return {
        type: SNAP_SAVING,
        saving        
    }
}

function setError(message){
    return{
        type: SET_CREATE_SURVEY_RESPONSE_ERROR,
        error: message
    }
}


export function createVideoSurveyResponse(surveyId, videoFile) {
    return (dispatch, getState) => {
        dispatch(setSnapSaving(true))
        
        const state = getState()
        // create response so we can get an id related to that response.
        const responseId = createVideoResponse.call({
            surveyId: surveyId,
            emoji: state.surveys.snaps.emojis.selectedValue
        }, (err, resp) =>{
            if ( err ) {                
                dispatch(setSnapSaving(false))
                dispatch(setError('Mongo Error: ' + err))
            } else {
                console.log('mongo success: '+ resp)
            }
        })
        
        // trigger the file upload
        const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {surveyResponseId: responseId} )
        
        uploader.send(videoFile, ( err, url ) => {
            if ( err ) {
                dispatch(setSnapSaving(false))
                dispatch(setError('aws error: '+ err))
            } else {
                updateVideoResponseUrl.call({
                    surveyResponseId: responseId,
                    url: url
                }, (err, resp) =>{                    
                    dispatch(setSnapSaving(false))
                    if ( err ) {
                        dispatch(setError('mongo update error: '+ err))
                    } else {
                        console.log('mongo update success: '+ resp)
                    }
                })
            }
        })
    }
}