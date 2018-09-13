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
import Settings from './_components/Settings/Settings';
import SettingsButton from './_components/Settings/SettingsButton';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Dashboard />
       <BrowserRouter>
                <Switch>
                    <Route exact path="/admin" component={Products}/>
                    <Route path="/admin/products" component={Products}/>
                    <Route path="/admin/product/view" component={ViewProduct}/>
                    <Route path="/admin/product/add" component={AddProduct}/>
                    <Route path="/admin/settings" component={Settings} />
                    <Route component={PathNotFound} />
                </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
