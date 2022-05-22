import React from 'react';
import ReactDOM from 'react-dom/client';
import './HtmlComponents/Css/index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
console.log(
  document.getElementById("add"))
document.querySelector("add").onclick = (event)=>{
  root.render(
    <React.StrictMode>
      <Add />
    </React.StrictMode>
  );
}*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
