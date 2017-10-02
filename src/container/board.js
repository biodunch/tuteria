import React, { Component } from 'react';
import {styles} from '../styles/styles';
import Header from '../components/header';
import QuestionBox from '../container/question_box';

class Board extends Component {
  render() {
    return (
      <div className="App" style={styles.box} >
        <Header />
        <QuestionBox />
      </div>
    );
  }
}

export default Board;
