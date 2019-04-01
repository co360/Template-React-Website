import React, { Component } from "react";
// import "./css/App.css";
import App from './App';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './redux/index';
import { api } from './views';

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
)
class AppContainer extends Component {
  constructor(props) {
    super(props);
    api.api.setStore(store)
  }

  render() {
    return (
      <Provider store={store} >
            <App />
      </Provider>
    );
  }
}

export default AppContainer;
