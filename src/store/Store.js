import { createStore } from 'redux';
import { connectionReducer } from '../reducers/Reducers'

export const reducers = combineReducers({
    connectionReducer,
});

export function newStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();