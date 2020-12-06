import selectionTypes from "./selection.types"

export const clearSelection = () => ({
    type: selectionTypes.CLEAR_SELECTION
})

export const makeSelection = (selection) => ({
    type: selectionTypes.MAKE_SELECTION,
    payload: selection
})