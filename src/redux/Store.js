import { createStore, combineReducers } from 'redux';
import { connection } from './Reducers'

export const reducers = combineReducers({
    connection
});

export function newStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = newStore();