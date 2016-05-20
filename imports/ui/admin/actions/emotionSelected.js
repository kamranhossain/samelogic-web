export const EMOTION_SELECTED = 'EMOTION_SELECTED'

export function emotionSelected(selectedEmotion) {
    return {
        type: EMOTION_SELECTED,
        selectedEmotion        
    }
}