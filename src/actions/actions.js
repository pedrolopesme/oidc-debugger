import * as constants from './Constants'

export const setConnection = (connection) => ({
    type: constants.SET_CONNECTION,
    connection,
});