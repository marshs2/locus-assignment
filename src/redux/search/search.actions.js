import SearchTypes from './search.types';

export const changeSearch = (search) => ({
    type: SearchTypes.CHANGE_SEARCH,
    payload: search
});

export const setSearchText = (searchText) => ({
    type: SearchTypes.SET_SEARCH_TEXT,
    payload: searchText
})