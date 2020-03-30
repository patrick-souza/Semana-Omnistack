import React from 'react';
import 'global.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import History from 'Util/History';
import store from 'Redux-tools';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={History}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
