import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DebuggerContainer from './containers/DebuggerContainer';
import RedirectContainer from './containers/RedirectContainer';
import LogoutContainer from './containers/LogoutContainer';
import { activateConnection } from './redux/Actions.js';
import { connect } from 'react-redux';
import ButtonAppBar from './components/AppBar';
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Route path="/logout" component={LogoutContainer} />
        <Route path="/redirect" component={RedirectContainer} />
        <Route exact path="/" render={() => 
          <DebuggerContainer 
          activateConnection={this.props.activateConnection} />
        }/> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  activateConnection
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
