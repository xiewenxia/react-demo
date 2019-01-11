import React, { Component } from 'react';
import Header from './component/header/index';
import Nav from './component/nav/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
