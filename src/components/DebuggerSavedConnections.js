import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';

class DebuggerSavedConnections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connections: props.connections,
            activateConnection: props.activateConnection
        }
    }

    render = () => {
        return (
            <div>
                <h4> Saved Connections </h4>
                {this.state.connections ? (
                    <ul>
                        {this.state.connections.map(connection =>
                            <li key={connection.name} onClick={() => this.state.activateConnection(connection.connection)}>
                                {connection.name} - client: <b> {connection.connection.client_id} </b>
                            </li>
                        )}
                    </ul>
                ) : (
                        <div> There's no saved connections </div>
                    )}
            </div>)
    }
}

DebuggerSavedConnections.propTypes = {
    connections: PropTypes.arrayOf(PropTypes.object),
    activateConnection: PropTypes.func.isRequired
};

export default DebuggerSavedConnections;