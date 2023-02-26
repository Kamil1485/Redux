import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';
const store=createStore(reducer)//1.adım

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);






