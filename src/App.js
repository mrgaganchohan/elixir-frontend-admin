import React, { Component } from 'react';
import './App.css';

import Login from './_components/Login/Login';
import Dashboard from './_components/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Dashboard />
      </div>
    );
  }
}

export default App;
