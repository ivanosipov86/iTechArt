import React from 'react';
import ReactDOM from 'react-dom';
// import classes from './index.module.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import reducer from './redux/reducer'
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, devToolsEnhancer());

store.subscribe(() => {
  localStorage['toDoStore'] = JSON.stringify(store.getState())
})

const todoApp = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  todoApp,
    document.getElementById('root')
);



