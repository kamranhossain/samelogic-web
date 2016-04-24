/* eslint-disable no-console */
import { Slingshot } from 'meteor/edgee:slingshot'

import { createVideoResponse, updateVideoResponseUrl } from '/imports/api/surveys/methods'

export const SNAP_UPLOADING = 'SNAP_UPLOADING'

function setSnapUploading(uploading) {
    return {
        type: SNAP_UPLOADING,
        uploading        
    }
}

export function createVideoSurveyResponse(surveyId, videoFile) {
    return (dispatch, getState) => {
        dispatch(setSnapUploading(true))
        
        const state = getState()
        // create response so we can get an id related to that response.
        const responseId = createVideoResponse.call({
            surveyId: surveyId,
            emoji: state.surveys.snaps.emojis.selectedValue
        }, (err, resp) =>{
            if ( err ) {
                console.error('mongo error: '+ err)
            } else {
                console.log('mongo success: '+ resp)
            }
        })
        
        // trigger the file upload
        const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {surveyResponseId: responseId} )
        
        uploader.send(videoFile, ( err, url ) => {
            dispatch(setSnapUploading(false))
            //computation.stop()
            if ( err ) {
                console.error('aws error: '+ err)
            } else {
                updateVideoResponseUrl.call({
                    surveyResponseId: responseId,
                    url: url
                }, (err, resp) =>{
                    if ( err ) {
                        console.error('mongo update error: '+ err)
                    } else {
                        console.log('mongo update success: '+ resp)
                    }
                })
                console.log('aws success: '+ url)
            }
        })
    }
}