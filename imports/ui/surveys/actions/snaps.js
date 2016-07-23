import { Slingshot } from 'meteor/edgee:slingshot'
import { createResponse, updateVideoResponseUrl } from '/imports/api/methods'

export const CREATE_SNAP = 'CREATE_SNAP'
export const CREATE_SNAP_SUCCESS = 'CREATE_SNAP_SUCCESS'
export const CREATE_SNAP_FAILURE = 'CREATE_SNAP_FAILURE'
export const RESET_NEW_SNAP = 'RESET_NEW_SNAP'
export const CREATE_SNAP_UPLOAD_PROGRESS = 'CREATE_SNAP_UPLOAD_PROGRESS'

//Validate Snap fields like Emoji, Snap and Message on the server
export const VALIDATE_SNAP_FIELDS = 'VALIDATE_SNAP_FIELDS'
export const VALIDATE_SNAP_FIELDS_SUCCESS = 'VALIDATE_SNAP_FIELDS_SUCCESS'
export const VALIDATE_SNAP_FIELDS_FAILURE = 'VALIDATE_SNAP_FIELDS_FAILURE'
export const RESET_SNAP_FIELDS = 'RESET_SNAP_FIELDS'

export function createSnapSuccess(newSnap) {
    return {
        type: CREATE_SNAP_SUCCESS,
        payload: newSnap
    }
}

export function createSnapFailure(error) {
    return {
        type: CREATE_SNAP_FAILURE,
        payload: error
    }
}

export function createSnapUploadProgress(progress){
    return{
        type: CREATE_SNAP_UPLOAD_PROGRESS,
        progress
    }
}

export function createSnap(values) {
    return (dispatch) => {
        
        return new Promise((resolve, reject) => {
            dispatch({type: CREATE_SNAP})
            // create response so we can get an id related to that response.
            const responseId = createResponse.call({
                campaignId: values.surveyId,
                emoji: parseInt(values.emoji),
                type: 'video'
            }, (err) =>{
                if ( err ) {
                    reject('There was an error starting the process. Please refresh and try again.')
                }
            })

            // trigger the file upload
            const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {responseId: responseId} )
            
            uploader.send(values.snap[0], ( err, url ) => {
                computation.stop()
                if ( err ) {
                    reject('There was an error uploading the video.')
                } else {
                    updateVideoResponseUrl.call({
                        responseId: responseId,
                        url: url
                    }, (err) =>{                    
                        if ( err ) {                            
                            reject('There was an error completing the process.')
                        } else {
                            resolve({id: responseId})
                        }
                    })
                }
            })

            const computation = Tracker.autorun(() => {
                dispatch(createSnapUploadProgress(uploader.progress()))
            })
        })   
        

        
        
    }
}