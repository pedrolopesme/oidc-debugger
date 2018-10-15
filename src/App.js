import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DebuggerContainer from './containers/DebuggerContainer';
import RedirectContainer from './containers/RedirectContainer';
import LogoutContainer from './containers/LogoutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/redirect" component={RedirectContainer} />
        <Route exact path="/" component={DebuggerContainer} />
      </div>
    );
  }
}

export default App;
