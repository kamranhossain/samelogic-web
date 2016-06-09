import { newErrorNotification } from '/imports/ui/app/actions'

export const SNAP_SELECTED = 'SNAP_SELECTED'
export const SNAP_VALIDATION_ERROR = 'SNAP_VALIDATION_ERROR'

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
    return (dispatch, getState) => {
        const objectUrl = URL.createObjectURL(selectedVideo)
        const audio = new Audio(objectUrl)
        audio.onloadedmetadata = () => {      

            // Validation
            const state = getState()
            const maxDuration = state.surveys.snaps.maxDuration
            const minDuration = state.surveys.snaps.minDuration

            let error = undefined
            if(audio.duration < minDuration){
                error = `Video was ${audio.duration}s, Too short`
            } else if(audio.duration > maxDuration){
                error = `Video was ${audio.duration}s, Too short`
            }
            if(error){
                dispatch(newErrorNotification(error))
                dispatch(setError(error))
            }

            
            dispatch(setSnapSelected(selectedVideo, audio.duration))
        }
    }

}