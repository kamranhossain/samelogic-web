import { Slingshot } from 'meteor/edgee:slingshot'
import { push } from 'react-router-redux'

import { newErrorNotification } from '/imports/ui/app/actions'
import { createVideoResponse, updateVideoResponseUrl } from '/imports/api/methods'

export const SET_CREATE_SURVEY_RESPONSE_ERROR = 'SET_CREATE_SURVEY_RESPONSE_ERROR'
export const SNAP_SAVING = 'SNAP_SAVING'
export const SNAP_SAVED = 'SNAP_SAVED'

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

function snapSaved(){
    return{
        type: SNAP_SAVED,
        saved: true
    }
}

export function createVideoSurveyResponse() {
    return (dispatch, getState) => {
        dispatch(setSnapSaving(true))
        
        const state = getState()
        // create response so we can get an id related to that response.
        const responseId = createVideoResponse.call({
            campaignId: state.surveys.survey.current._id,
            emoji: state.surveys.snaps.emojis.selectedValue
        }, (err) =>{
            if ( err ) {                
                dispatch(setSnapSaving(false))
                dispatch(newErrorNotification('There was an error starting the process. Please refresh and try again.'))
            }
        })
        
        // trigger the file upload
        const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {responseId: responseId} )
        
        uploader.send(state.surveys.snaps.selectedSnap.data, ( err, url ) => {
            if ( err ) {
                dispatch(setSnapSaving(false))
                dispatch(setError('aws error: '+ err))
            } else {
                updateVideoResponseUrl.call({
                    responseId: responseId,
                    url: url
                }, (err) =>{                    
                    dispatch(setSnapSaving(false))
                    if ( err ) {
                        dispatch(setError('mongo update error: '+ err))
                    } else {
                        dispatch(snapSaved())
                        dispatch(push(`/surveys/${state.surveys.survey.current._id}/completed`))
                    }
                })
            }
        })
    }
}