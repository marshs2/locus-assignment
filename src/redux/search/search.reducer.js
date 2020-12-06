import SearchTypes from './search.types';

const INITIAL_STATE = {
    search: '',
    searchText: ''
}

const searchReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case SearchTypes.CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case SearchTypes.SET_SEARCH_TEXT:
                return {
                    ...state,
                    searchText: action.payload
                }
        default:
            return state;
    }
}

export default searchReducer;