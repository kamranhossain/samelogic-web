import * as ActionTypes from '/imports/ui/surveys/actions'


const initialState = {
    uploading: false
}

export default function snaps(state = initialState, action){
    const { type, uploading } = action
    
    if(type === ActionTypes.SNAP_UPLOADING){
        return Object.assign({}, state, {
            uploading
        })
    }
    
    return state
}