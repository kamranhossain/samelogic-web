import * as ActionTypes from '/imports/ui/surveys/actions'
import Emojis from '/imports/api/surveys/collections/emojis' 

const initialState = {
    saving: false,
    emojis: {
        data: Emojis.nodes.filter((e) => e.includeInSnapsSurvey), 
        selectedValue: 0
    }
}

function emojis(state = initialState.emojis, action){
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

export default function snaps(state = initialState, action){
    const { type, saving } = action
    
    switch(type){
    case ActionTypes.SNAP_SAVING:
        return Object.assign({}, state, {
            saving
        })
    default:
        return{
            loading: state.loading,
            emojis: emojis(state.emojis, action)
        }
    }            
}

