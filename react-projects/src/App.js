import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './components/ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Toggle</h3>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>ShowMe</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
