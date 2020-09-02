import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User"

function App() {
  return (
    <div className="App">
      <User firstName="Jacob" lastName="ZOUZOU" age="55"></User>
    </div>
  );
}

export default App;
