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
        <div>
          {JSON.stringify(this.props.connection)}

          <button
            onClick={() =>
              this.props.activateConnection({ connection: Connections[0] })
            }
          >
            Click Me!
          </button>
        </div>

        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/redirect" component={RedirectContainer} />
        <Route exact path="/" component={DebuggerContainer} activateConnection={this.props.activateConnection} />
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
