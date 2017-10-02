import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {styles} from '../styles/styles';
import Header from '../components/header';

class Board extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <button type="submit" className="btn btn-success">Uhm</button>
        <p className="App-intro">
          To get star ted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Board;
