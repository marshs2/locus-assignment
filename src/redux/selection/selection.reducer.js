import selectionTypes from './selection.types';

const INITIAL_STATE = {
    selection: null
}

const selectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case selectionTypes.MAKE_SELECTION: 
            return {
                ...state,
                selection: action.payload
            }

        case selectionTypes.CLEAR_SELECTION:
            return {
                ...state,
                selection: null
            }

        default: 
            return state;
    }
}

export default selectionReducer;