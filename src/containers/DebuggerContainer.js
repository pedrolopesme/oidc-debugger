import React, { Component } from 'react';
import DebuggerForm from '../components/DebuggerForm';
import DebuggerSavedConnections from '../components/DebuggerSavedConnections';
import { Connections } from '../configs/Connections';

class DebuggerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeConnection: props.activeConnection,
            activateConnection: props.activateConnection,
            debugger: {
                authority: "",
                redirect_uri: "",
                client_id: "",
                post_logout_redirect_uri: "",
                scope: "",
                state: "",
                nonce: "",
                response_type: "",
                response_mode: "",
                filterProtocolClaims: true,
                loadUserInfo: true
            }
        }
    }

    render() {
        return (
            <div className="debuggerComponent">
                <div className="sidebar">
                    <DebuggerSavedConnections connections={Connections} activateConnection={this.state.activateConnection} />
                </div>
                <div className="content">
                    <DebuggerForm form={this.state.activeConnection} />
                </div>

            </div>)
    }
}

export default DebuggerContainer;