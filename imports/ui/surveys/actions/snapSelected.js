export const SNAP_SELECTED = 'SNAP_SELECTED'

export function snapSelected(selectedVideo) {
    return {
        type: SNAP_SELECTED,
        selectedVideo        
    }
}