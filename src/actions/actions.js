import * as constants from './constants'

export const setConnection = (connection) => ({
    type: constants.SET_CONNECTION,
    connection,
});