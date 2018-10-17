import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';

class DebuggerSavedConnections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connections: props.connections,
            selectConnection: props.selectConnection
        }
    }

    render = () => {
        return (
            <div>
                <h4> Saved Connections </h4>
                {this.state.connections ? (
                    <ul>
                        {this.state.connections.map(connection =>
                            <li key={connection.name} onClick={() => this.state.selectConnection(connection.connection)}>
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
    selectConnection: PropTypes.func.isRequired
};

export default DebuggerSavedConnections;