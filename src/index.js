import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// import App from "./components/PropRender"
// import App from "./components/PropChildren"
// import App from "./components/User"
// import App from "./components/Reducer"
// import App from "./components/Checkbox"
// import App from "./components/Hook"
// import App from "./components/ContextApi"
// import App from "./components/CustomHook"
// import App from "./components/GithubUser"
// import App from "./components/HOC"
// import App from "./components/HOC _2"
import App from "./components/LazyLoading"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
