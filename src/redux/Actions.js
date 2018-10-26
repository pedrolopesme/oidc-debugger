import { Constants } from './Reducers'

export const activateConnection = (connection) => ({
    type: Constants.ACTIVATE_CONNECTION,
    connection,
});