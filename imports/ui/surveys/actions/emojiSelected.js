export const EMOJI_SELECTED = 'EMOJI_SELECTED'

export default (selectedEmojiValue) => {
    return {
        type: EMOJI_SELECTED,
        selectedEmojiValue        
    }
}