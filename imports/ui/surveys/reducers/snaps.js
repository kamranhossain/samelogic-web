import * as ActionTypes from '/imports/ui/surveys/actions'
import Emojis from '/imports/api/surveys/collections/emojis' 

const initialState = {
    uploading: false,
    emojis: Emojis.nodes.filter((e) => e.includeInSnapsSurvey)
}

function emojis(state = initialState.emojis, action){
    const { type, selectedEmojiValue } = action
    
    if(type === ActionTypes.EMOJI_SELECTED){
        return state.map((e) => {
            e.selected = selectedEmojiValue === e.value
            return e
        })
    }
    return state
}

export default function snaps(state = initialState, action){
    const { type, uploading } = action
    
    switch(type){
    case ActionTypes.SNAP_UPLOADING:
        return Object.assign({}, state, {
            uploading
        })
    default:
        return{
            loading: state.loading,
            emojis: emojis(state.emojis, action)
        }
    }            
}

