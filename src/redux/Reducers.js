export const connection = (state = {}, action) => {
    switch (action.type) {
        case Constants.ACTIVATE_CONNECTION:
            return action.connection;
        default:
            return state;
    }
};

export const Constants = {
    ACTIVATE_CONNECTION: 'ACTIVATE_CONNECTION'
};