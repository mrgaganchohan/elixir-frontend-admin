import React, { Component } from 'react';
import './App.css';

import Login from './_components/Login/Login';
import Dashboard from './_components/Dashboard/Dashboard';
import DashOptions from './_components/DashOptions/DashOptions';
import Products from './_components/Products/Products';
import Content from './_components/Dashboard/Content';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Dashboard />
       <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Content}/>
                    <Route path="/products" component={Products}/>
                </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
