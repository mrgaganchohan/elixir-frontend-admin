import React, { Component } from 'react';
import './App.css';

//import Login from './_components/Login/Login';
// import Products from './_components/Products/Products';
// import ViewProduct from './_components/Products/ViewProduct';
// import AddProduct from './_components/Products/AddProduct';
// import PathNotFound from './_components/Error/PathNotFound';
// import Settings from './_components/Settings/Settings';

import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './_components/Routes/Routes';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
