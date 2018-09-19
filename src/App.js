import React, { Component } from 'react';
import './assets/css/custom.css';
import './App.css'
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
