import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping the whole app with RecoilRoot to get access to recoil's functionality, see https://recoiljs.org/docs/introduction/getting-started/#recoilroot for details. */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
