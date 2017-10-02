import React from 'react';
import { styles } from '../styles/styles';
import Options from '../components/options';

const QuestionItem = (props) => {

    return (
        <div>
            <div className='row' style={{ paddingTop: '40px' }} >
                <div className='col-md-1 col-md-offset-1' style={{ color: 'green' }} >
                    <p>2 <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                </div>
                <div className='col-md-5'>
                    <p> {props.question} <i style={{ color: 'grey' }} >(press A - D to answer)</i></p>
                    <div style={styles.options} >
                        {props.options.map((option, index) => <Options option={option} key={index} />)}
                    </div>
                </div>
                <div className='col-md-5 pull-right'>
                    <img src="/img/chart.png" alt="" height='85.29%' width='90.21%' />
                </div>
            </div>
            <div style={styles.qnav} className="col-md-5 col-md-offset-2">
                    <button className='btn btn-default btn-lg col-md-4 '  style={styles.btnPrev} disabled>
                        <i className="fa fa-lg fa-angle-left pull-left" aria-hidden="true"></i>
                        Previous 
                    </button>
                    <button className='btn btn-primary btn-lg col-md-7 col-md-offset-1' style={styles.btnNext} >
                        Next
                        <i className="fa fa-lg fa-angle-right pull-right" aria-hidden="true"></i>
                    </button>
            </div>
        </div>
    )
}

export default QuestionItem;