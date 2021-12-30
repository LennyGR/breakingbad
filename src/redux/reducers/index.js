import rootReducer from './rootReducer';

import { persistCombineReducers, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
//import storage from 'redux-persist/lib/storage';

export const rootPersistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['characters']
};

const reducers = persistCombineReducers(rootPersistConfig, {
    characters: rootReducer
});

export default persistReducer(rootPersistConfig, reducers);