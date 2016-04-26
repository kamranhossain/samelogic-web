import * as ActionTypes from '/imports/ui/surveys/actions'
import Emojis from '/imports/api/surveys/collections/emojis' 

const initialState = {
    saving: false,
    emojis: {
        data: Emojis.nodes.filter((e) => e.includeInSnapsSurvey), 
        selectedValue: 0
    },
    selectedSnap: {
        data: null,
        duration: 0
    }
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
            emojis: emojiSelected(state.emojis, action),
            selectedSnap: snapsSelected(state.selectedSnap, action)
        }
    }            
}

