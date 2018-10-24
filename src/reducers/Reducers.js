import * as constants from './constants'

export const connectionReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.SET_CONNECTION:
            return Object.assign({}, state, action.connection);
        default:
            return state;
    }
};  