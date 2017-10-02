import React from 'react';
import { styles } from '../styles/styles';

const Header = (props) => {
    return (
        <header style={styles.header} className='col-md-12'>
            <div className='col-md-2 headerText' style={styles.brand} >
                <h2 style={styles.headerText}>tuteria</h2>
            </div>
            <div className='col-md-6 headerText' style={{paddingTop:'22px'}} >
                <p>General Mathematics Test</p>
            </div>
        </header>
    )
}

export default Header;