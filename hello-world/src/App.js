import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    <h2> Welcome to React</h2>
    
    </div>
    <p className="App-intro">
    <h1> My Page Starts Here Pavani!! </h1>
    To get started, edit <code> src/App.js</code> 
  </p>
  </div>
    );
  }
}

export default App;