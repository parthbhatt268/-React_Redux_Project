import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";
import {reducer} from './Store/reducer'
import sagas from './Sagas'
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleWare = createSagaMiddleware()

const enhancers = []
// const initialState = {};
const middleware = [
  sagaMiddleWare
];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
  );
  
  const store = createStore(reducer, composedEnhancers)
  sagaMiddleWare.run(sagas)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
