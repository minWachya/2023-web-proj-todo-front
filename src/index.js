import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.render(  // ReactDOM.render(react 컴포넌트, 부모 엘리먼트): 부모 엘리먼트 아래에 컴포넌트 달아라
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
