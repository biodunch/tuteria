import React from 'react';
import {styles} from '../styles/styles';
import QuestionHeader from '../components/question_header';
import QuestionItem from '../components/question_item';
import question from '../data/questions';


export default class QuestionBox extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='row'>
                <div className='col-md-10 col-md-offset-1'>
                    <QuestionHeader />
                    <div style={styles.qBox} >
                        <QuestionItem  question={question.item} options={question.options}/>
                    </div>
                </div>
            </div>
        )
    }
}