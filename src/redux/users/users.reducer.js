import USER_DATA from './users.data';

const INITIAL_STATE = {
    users: USER_DATA
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default usersReducer;