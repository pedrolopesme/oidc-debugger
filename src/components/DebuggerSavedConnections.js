import React, { Component } from 'react';

class DebuggerSavedConnections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            connections: props.connections
        }
    }
    render = () => {
        return (
            <div>
                <h4> Saved Connections </h4>
                {this.state.connections ? (
                    <ul>
                        {this.state.connections.map(connection =>
                            <li key={connection.name}> {connection.name} - client: <b> {connection.connection.client_id} </b> </li>
                        )}
                    </ul>
                ) : (
                        <div> There's no saved connections </div>
                    )}
            </div>)
    }
}

export default DebuggerSavedConnections;