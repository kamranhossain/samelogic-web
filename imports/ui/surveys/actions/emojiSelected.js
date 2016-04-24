export const EMOJI_SELECTED = 'EMOJI_SELECTED'

export function emojiSelected(selectedEmojiValue) {
    return {
        type: EMOJI_SELECTED,
        selectedEmojiValue        
    }
}