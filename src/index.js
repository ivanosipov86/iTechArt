import React from 'react';
import ReactDOM from 'react-dom';
// import classes from './index.module.css';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reducer from './redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const todoApp = (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  todoApp,
    document.getElementById('root')
);



  