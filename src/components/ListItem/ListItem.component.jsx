import React, { useEffect } from 'react';
import "./ListItem.styles.scss";
import Highlighter from "react-highlight-words";
import { connect } from 'react-redux';
import { makeSelection } from '../../redux/selection/selection.actions';
import { changeSearch, setSearchText } from '../../redux/search/search.actions';

const ListItem = ({user, search, makeSelection, changeSearch, tab, setSearchText}) => {

    const listItemRef = React.createRef();

    useEffect(() => {
        keyboardEvents();
    }, [])

    const handleClick = (user) => {
        makeSelection(user);
        changeSearch("");
        setSearchText(user.name);
    }

    const handleMouseOver = (event) => {
        setTimeout(() => {
            if (listItemRef.current.contains(event.target)) {
                listItemRef.current.focus();
                setSearchText(listItemRef.current.dataset.name);
            }
        });
    }

    const keyboardEvents = () => {
        const node = listItemRef.current;
        if (node) {
            node.addEventListener('keydown', function(e) {
                const active = document.activeElement;
                // Enter
                if (e.keyCode === 13) {
                    handleClick(user);
                    setSearchText(e.target.dataset.name);
                }
                // Down
                if(e.keyCode === 40 && active.nextSibling) {
                    active.nextSibling.focus();
                }
                // Up
                if(e.keyCode === 38 && active.previousSibling) {
                    active.previousSibling.focus();
                }
            });
        }
    }
    
    return (
        <div
            data-name={user.name}
            tabIndex={tab}
            ref={listItemRef}
            onMouseOver={(event) => handleMouseOver(event)}
            onClick={() => handleClick(user)}
            className="list-item">
                <div className="userId">
                    <strong>
                        <Highlighter
                            highlightClassName="highlight"
                            searchWords={[search]}
                            textToHighlight={user.id}
                        />
                    </strong>
                </div>
                <div className="userName">
                    <em>
                        <Highlighter
                            highlightClassName="highlight"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={user.name}
                        />
                    </em>
                </div>
                <div className="userItems">
                    {
                        user.items.join('').indexOf(search) >= 0 ? 
                        `"${search}" found in items`: null
                    }
                </div>
                <div className="userAddress">
                    <Highlighter
                        highlightClassName="highlight"
                        searchWords={[search]}
                        autoEscape={true}
                        textToHighlight={user.address}
                    /> - <Highlighter
                        highlightClassName="highlight"
                        searchWords={[search]}
                        autoEscape={true}
                        textToHighlight={user.pincode}
                    />
                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    search: state.search.search,
})

const mapDispatchToProps = (dispatch) => ({
    makeSelection: (user) => dispatch(makeSelection(user)),
    changeSearch:  (value) => dispatch(changeSearch(value)),
    setSearchText: (searchText) => dispatch(setSearchText(searchText))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);