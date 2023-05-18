import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';

//For Redux
import store from './Redux/store';    //Import Redux in index.js
import { Provider } from "react-redux"
store.subscribe(() => console.log(store.getState()));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
