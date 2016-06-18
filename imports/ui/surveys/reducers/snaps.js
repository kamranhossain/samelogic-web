import * as ActionTypes from '/imports/ui/surveys/actions'
import Emojis from '/imports/api/collections/emojis' 

const initialState = {
    newSnap: {snap:null, error: null, loading: false},
    saved: false,
    saving: false,
    emojis: {
        data: Emojis.nodes.filter((e) => e.includeInSnapsSurvey), 
        selectedValue: 0
    },
    selectedSnap: {
        data: null,
        duration: 0
    },
    maxDuration: 60,
    minDuration: 15
}

function newSnap(state = initialState.newSnap, action){
    let error
    switch(action.type){
    case ActionTypes.CREATE_SNAP:
        return {...state, loading: true}
    case ActionTypes.CREATE_SNAP_SUCCESS:
        return {...state, snap:action.payload.data, error:null, loading: false}
    case ActionTypes.CREATE_SNAP_FAILURE:
        error = action.payload.data || {message: action.payload.message}//2nd one is network or server down errors
        return {...state, snap:null, error:error, loading: false}
    case ActionTypes.RESET_NEW_SNAP:
        return {...state, snap:null, error:null, loading: false}
    case ActionTypes.VALIDATE_SNAP_FIELDS:
        return {...state, error: null, loading: true}
    case ActionTypes.VALIDATE_SNAP_FIELDS_SUCCESS:
        return {...state, error: null, loading: false}
    case ActionTypes.VALIDATE_SNAP_FIELDS_FAILURE:
        {
            let result = action.payload.data
            if(!result) {
                error = {message: action.payload.message}
            } else {
                error = {emoji: result.emoji, snap: result.snap, comment: result.comment}
            }
            return {...state, error: error, loading: false}
        }
    case ActionTypes.RESET_SNAP_FIELDS:
        return {...state, error: null, loading: null}
    default:
        return state
    }
}

function snapSaved(state= initialState.saved, action){
    const { type, saved } = action
    if(type === ActionTypes.SNAP_SAVED){
        return saved
    }
    return state
}

function emojiSelected(state = initialState.emojis, action){
    const { type } = action
    const selectedEmojiValue = parseInt(action.selectedEmojiValue)
    if(type === ActionTypes.EMOJI_SELECTED){
        return {
            data: state.data.map((e) => {
                e.selected = selectedEmojiValue === e.value
                return e
            }),
            selectedValue: selectedEmojiValue
        }
    }
    return state
}

function snapsSelected(state = initialState.selectedSnap, action){
    const { type, selectedVideo, duration } = action
    if(type === ActionTypes.SNAP_SELECTED){
        return {
            data: selectedVideo,
            duration
        }
    }
    return state
}

export default function snaps(state = initialState, action){
    const { type, saving } = action
    
    switch(type){
    case ActionTypes.SNAP_SAVING:
        return {...state, saving}
    default:
        return {...state,
            newSnap: newSnap(state.newSnap, action),
            saved: snapSaved(state.saved, action),
            emojis: emojiSelected(state.emojis, action),
            selectedSnap: snapsSelected(state.selectedSnap, action)
        }
    }            
}

