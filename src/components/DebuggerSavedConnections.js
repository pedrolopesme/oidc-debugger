import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

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
                <h2> Saved Connections </h2>
                {this.state.connections ? 
                    this.state.connections.map(connection =>
                        <Card key={connection.name} 
                            onClick={() => this.state.activateConnection(connection.connection)}
                            className="savedConnection">
                            <div className="connection"> {connection.name} </div> 
                            <div className="client"> {connection.connection.client_id} </div>
                            <i class="material-icons"> arrow_right </i>
                        </Card>
                    )
                    : (
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