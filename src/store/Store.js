import { createStore } from 'redux';

export function newStore(reducers, initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();