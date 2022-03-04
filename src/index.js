import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(
  <React.StrictMode>
    <div className='main'>
      <h4>server side rendereing GUIDE </h4>
      <h4>one => yarn build</h4>
      <h4>two => yarn ssr </h4>
      <h4>tree => http://localhost:3000/</h4>
      <h4>four => check view page source</h4>
      <h4>please checke network in inspect (*_*)</h4>
      <h4>disabled javascript from browser settings  (*_*)</h4>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
