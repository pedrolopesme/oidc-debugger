import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DebuggerContainer from './containers/DebuggerContainer';
import RedirectContainer from './containers/RedirectContainer';
import LogoutContainer from './containers/LogoutContainer';
import { activateConnection } from './redux/Actions.js';
import { connect } from 'react-redux';
import { Connections } from './configs/Connections';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/redirect" component={RedirectContainer} />
        <Route exact path="/"> 
          <DebuggerContainer 
            activeConnection={this.props.connection} 
            activateConnection={this.props.activateConnection} />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  connection: state.connection
});

const mapDispatchToProps = {
  activateConnection
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
