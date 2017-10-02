import React from 'react';
import { styles } from '../styles/styles';
import './options.css';

const Options = (props) => {
    return (
        <div>
            <label className="optionSelected" style={styles.optionLabel} htmlFor={props.key}>
                <input type="radio" name="radio" style={styles.radio} className='radio' id={props.key} />
                <div className="optionBox">
                    <div style={styles.optionLetter}>{props.option.key}</div>
                    <p style={styles.optionValue}>{props.option.value}</p>
                    <div className="smallBox"></div>
                </div>
            </label>
        </div>
    )
}

export default Options;