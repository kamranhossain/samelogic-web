import { Slingshot } from 'meteor/edgee:slingshot'
import { push } from 'react-router-redux'

import { newErrorNotification } from '/imports/ui/app/actions'
import { createVideoResponse, updateVideoResponseUrl } from '/imports/api/methods'

export const CREATE_SNAP = 'CREATE_SNAP'
export const CREATE_SNAP_SUCCESS = 'CREATE_SNAP_SUCCESS'
export const CREATE_SNAP_FAILURE = 'CREATE_SNAP_FAILURE'
export const RESET_NEW_SNAP = 'RESET_NEW_SNAP'

//Validate Snap fields like Emoji, Snap and Message on the server
export const VALIDATE_SNAP_FIELDS = 'VALIDATE_SNAP_FIELDS'
export const VALIDATE_SNAP_FIELDS_SUCCESS = 'VALIDATE_SNAP_FIELDS_SUCCESS'
export const VALIDATE_SNAP_FIELDS_FAILURE = 'VALIDATE_SNAP_FIELDS_FAILURE'
export const RESET_SNAP_FIELDS = 'RESET_SNAP_FIELDS'

export function createSnap(values) {
    return (dispatch, getState) => {
        const state = getState()
        
        return new Promise((resolve, reject) => {
            // create response so we can get an id related to that response.
            const responseId = createVideoResponse.call({
                campaignId: state.surveys.survey.current._id,
                emoji: values.emoji
            }, (err) =>{
                if ( err ) {
                    reject('There was an error starting the process. Please refresh and try again.')
                }
            })

            // trigger the file upload
            const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {surveyResponseId: responseId} )
            
            uploader.send(state.surveys.snaps.selectedSnap.data, ( err, url ) => {
                if ( err ) {
                    reject('There was an error uploading the video.')
                } else {
                    updateVideoResponseUrl.call({
                        surveyResponseId: responseId,
                        url: url
                    }, (err) =>{                    
                        if ( err ) {                            
                            reject('There was an error completing the process.')
                        } else {
                            resolve()
                        }
                    })
                }
            })
        })   
        

        
        
    }
}