export const SNAP_SELECTED = 'SNAP_SELECTED'
export const SNAP_VALIDATION_ERROR = 'SNAP_VALIDATION_ERROR'

const MAX_SNAP_DURATION = 10 

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
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            const audio = new Audio(event.target.result)
            audio.onloadedmetadata = () => {      
                dispatch(setSnapSelected(selectedVideo, audio.duration))
                if(audio.duration > MAX_SNAP_DURATION){
                    dispatch(setError(`Video was ${audio.duration}s, Limit: ${MAX_SNAP_DURATION}`))
                }
            }
        }
        fileReader.readAsDataURL(selectedVideo)
    }

}