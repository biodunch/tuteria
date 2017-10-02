import React, { Component } from 'react';
import {styles} from '../styles/styles';
import Header from '../components/header';
import QuestionBox from '../container/question_box';

class Board extends Component {
  render() {
    return (
      <div className='col-md-8 col-md-offset-2' style={styles.box} >
        <Header />
        <QuestionBox />
      </div>
    );
  }
}

export default Board;
