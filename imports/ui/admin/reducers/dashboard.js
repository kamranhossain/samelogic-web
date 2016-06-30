import * as ActionTypes from '/imports/ui/admin/actions'

const initialState = {
    selectedEmotion: undefined,
    feedbackFilter: {
        orderby: ''
    }
}
function emotionSelected(state = initialState.selectedEmotion, action){
    const { type, selectedEmotion } = action
    if(type === ActionTypes.EMOTION_SELECTED){
        return selectedEmotion 
    }
    return state
}

export default function dashboard(state = initialState, action){
    const { type } = action
    
    switch(type){
    default:
        return {...state,
            selectedEmotion: emotionSelected(state.selectedEmotion, action)
        }
    }            
}

