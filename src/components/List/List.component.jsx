import React from 'react';
import "./List.styles.scss";
import { connect  } from 'react-redux';
import ListItem from '../ListItem/ListItem.component';


class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userRef: React.createRef()
        }
    }

    searchFullUserList = (search, users) => {
        let selected = [];
    
        if (!search) return selected;
    
        // Lookup all the strings, if array, check the arrays list
        users.forEach(user => {
            for (let i = 0; i < Object.keys(user).length; i++) {
                let individual = Object.keys(user)[i];
                if (Array.isArray(user[individual])) {
                    for(let i = 0; i < user[individual].length; i++) {
                        if (user[individual][i].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                            selected.push(user);
                            break;
                        }
                    }
                } else if (typeof user[individual] === 'string') {
                    if (user[individual].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        selected.push(user);
                        break;
                    }
                }
            }
        })
    
        return selected;
    }

    render() {
        let {search, users, selection} = this.props;
        let filtered = this.searchFullUserList(search, users);

        return (
            <div ref={this.state.userRef}  className="list-container">
            { filtered.length > 0 ? 
                search && <div className="list">
                    {
                        filtered.map((user, idx) => (
                            <ListItem key={idx} tab={idx} user={user}/>
                        ))
                    }
                </div>
            :
            !selection && search && 
                <div className="no-results">
                    No results found!
                </div>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    selection: state.selection.selection
})

export default connect(mapStateToProps)(List);