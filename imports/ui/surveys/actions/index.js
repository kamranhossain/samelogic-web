export * from './createVideoSurveyResponse'
export * from './emojiSelected'
export * from './snapSelected'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}