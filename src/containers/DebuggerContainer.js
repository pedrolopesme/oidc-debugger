import React, { Component } from 'react';
import DebuggerForm from '../components/DebuggerForm';
import DebuggerSavedConnections from '../components/DebuggerSavedConnections';

import SplitPane from 'react-split-pane'

class DebuggerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activateConnection: props.activateConnection
        }
    }

    loadConnection = () => {
        try {
            const connections = require('../configs/Connections');
            return connections.Connections;    
        } catch (error) {
            console.debug("No saved connections saved under /config dir")
        }
    
        return [];
    }

    render() {
        return (
            <SplitPane 
                className="debuggerComponent"
                split="vertical" 
                minSize={200} 
                defaultSize={ parseInt(localStorage.getItem('splitPos'), 10) || 250 }
                onChange={ size => localStorage.setItem('splitPos', size) }>
                <div className="sidebar"><DebuggerSavedConnections connections={this.loadConnection()} activateConnection={this.state.activateConnection} /></div>
                <div className="content"><DebuggerForm /></div>
            </SplitPane>
        )
    }
}

export default DebuggerContainer;