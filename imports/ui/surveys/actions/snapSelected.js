import { newErrorNotification } from '/imports/ui/app/actions'

export const SNAP_SELECTED = 'SNAP_SELECTED'
export const SNAP_VALIDATION_ERROR = 'SNAP_VALIDATION_ERROR'

const MAX_SNAP_DURATION = 5 

function setSnapSelected(selectedVideo, duration) {
    return {
        type: SNAP_SELECTED,
        selectedVideo,
        duration        
    }
}

function setError(message){
    return{
        type: SNAP_VALIDATION_ERROR,
        error: message
    }
}

export function snapSelected(selectedVideo) {
    return (dispatch) => {
        const objectUrl = URL.createObjectURL(selectedVideo)
        const audio = new Audio(objectUrl)
        audio.onloadedmetadata = () => {      
            dispatch(setSnapSelected(selectedVideo, audio.duration))
            if(audio.duration > MAX_SNAP_DURATION){
                const error = `Video was ${audio.duration}s, Limit: ${MAX_SNAP_DURATION}`
                dispatch(newErrorNotification(error))
                dispatch(setError(error))
            }
        }
    }

}