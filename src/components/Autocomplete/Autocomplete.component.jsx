import React from 'react';
import "./Autocomplete.styles.scss";
import List from '../List/List.component';
import { changeSearch, setSearchText } from '../../redux/search/search.actions';
import { connect  } from 'react-redux';
import { clearSelection } from '../../redux/selection/selection.actions';

const handleChange = (event, changeSearch, clearSelection) => {
    const {value} = event.target;
    changeSearch(value);
    clearSelection();
}

const closeClicked = (changeSearch, clearSelection) => {
    changeSearch("");
    clearSelection();
}

const Autocomplete = ({search, changeSearch, clearSelection, selection, searchText,}) => {

    return (
        <div className="auto-complete">
            <input placeholder="Search users by ID, name, items, address or pincode.."
                className="search-bar"
                name="search" 
                value={selection && searchText? searchText: search}
                onChange={(e) => handleChange(e, changeSearch, clearSelection)}/>
            <div className="close" onClick={() => closeClicked(changeSearch, clearSelection)}>X</div>
            <List search={search} />
        </div>
    )
}

const mapStateToProps = (state) => ({
        search: state.search.search,
        selection: state.selection.selection,
        searchText: state.search.searchText
})

const mapDispatchToProps = (dispatch) => ({
    changeSearch: (search) => dispatch(changeSearch(search)),
    clearSelection: () => dispatch(clearSelection())
})

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);