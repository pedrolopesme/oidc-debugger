import React, { Component } from 'react';
import DebuggerForm from '../components/DebuggerForm';
import DebuggerSavedConnections from '../components/DebuggerSavedConnections';
import { Connections } from '../configs/Connections';
import SplitPane from 'react-split-pane'

class DebuggerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activateConnection: props.activateConnection
        }
    }

    render() {
        return (
            <SplitPane 
                className="debuggerComponent"
                split="vertical" 
                minSize={200} 
                defaultSize={ parseInt(localStorage.getItem('splitPos'), 10) || 250 }
                onChange={ size => localStorage.setItem('splitPos', size) }>
                <div className="sidebar"><DebuggerSavedConnections connections={Connections} activateConnection={this.state.activateConnection} /></div>
                <div className="content"><DebuggerForm /></div>
            </SplitPane>
        )
    }
}

export default DebuggerContainer;