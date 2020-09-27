import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

//  react application은 한 번에 하나의 component만 rendering 할 수 있다!
//  따라서 모든 것은 App 안에 들어가야 한다!
//  App 안에 많은 component를 넣을 수 있다.
//  그리고 이러한 component 안에 더 많은 component를 import 할 수 있다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
