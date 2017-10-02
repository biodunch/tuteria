import React from 'react';
import { styles } from '../styles/styles';

const Header = (props) => {
    return (
        <div style={styles.header} className='row'>
            <div className='col-md-2 headerText' style={styles.brand} >
                <h2 style={styles.headerText}>tuteria</h2>
            </div>
            <div className='col-md-6' style={{paddingTop:'22px'}} >
                <p style={styles.headerText}>General Mathematics Test</p>
            </div>
        </div>
    )
}

export default Header;