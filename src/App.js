import React, { Component } from 'react';
import './App.css';

import Login from './_components/Login/Login';
import Dashboard from './_components/Dashboard/Dashboard';
import DashOptions from './_components/DashOptions/DashOptions';
import Products from './_components/Products/Products';
import Content from './_components/Dashboard/Content';
import ViewProduct from './_components/Products/ViewProduct';
import AddProduct from './_components/Products/AddProduct';
import PathNotFound from './_components/Error/PathNotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Dashboard />
       <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/product/view" component={ViewProduct}/>
                    <Route path="/product/add" component={AddProduct}/>
                    <Route component={PathNotFound} />
                </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
