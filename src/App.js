import React from 'react';

import './App.css';
// import User from "./components/User"
import Checkbox from "./components/Reducer"
// import GithubUser from "./components/GithubUser"

function App() {
  return (
    <div className="App">
      {/* <User firstName="Jacob" lastName="ZOUZOU" age="55"></User> */}
      <Checkbox/>
      {/* <GithubUser login="moonhighway"/>
      <GithubUser login="eveporcello"/> */}
    </div>
  );
}

export default App;
