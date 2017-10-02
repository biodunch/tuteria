import React from 'react';
import { styles } from '../styles/styles';

const QuestionHeader = (props) => {
    return (
        <header style={styles.qheader}>
            <div className='pull-left' >
                <p style={styles.text}><b>Question 2 of 30</b> - Multiple Choice</p>
            </div>
            <div className='pull-right'>
                <p style={styles.text}>Time remaining: 04:03</p>
            </div>
        </header>
    )
}

export default QuestionHeader;