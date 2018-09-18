import React, { Component } from 'react';
import './App.css';

//import Login from './_components/Login/Login';
import Dashboard from './_components/Dashboard/Dashboard';
import Products from './_components/Products/Products';
import ViewProduct from './_components/Products/ViewProduct';
import AddProduct from './_components/Products/AddProduct';
import PathNotFound from './_components/Error/PathNotFound';
import Settings from './_components/Settings/Settings';

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Dashboard />
          <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/product/view" component={ViewProduct}/>
                    <Route path="/product/add" component={AddProduct}/>
                    <Route path="/settings" component={Settings} />
                    <Route component={PathNotFound} />
                </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
