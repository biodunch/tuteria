import React from 'react';
import {styles} from '../styles/styles';

const Header = (props) => {
    return (
        <header style={styles.header} >
          <h1 className="App-title" style={styles.text} >Welcome to React</h1>
        </header>
    )
}

export default Header;