import { combineReducers } from 'redux';
import usersReducer from './users/users.reducer';
import { persistReducer} from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';
import searchReducer from './search/search.reducer';
import selectionReducer from './selection/selection.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    users: usersReducer,
    search: searchReducer,
    selection: selectionReducer
});

export default persistReducer(persistConfig, rootReducer)