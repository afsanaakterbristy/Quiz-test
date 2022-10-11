import React from 'react';
import Option from '../Option/Option';
import './QuizeQuestion.css'

const QuizQuestion = ({quizQuestion }) => {
   const {options,question,id}=quizQuestion
    //console.log(id);
    return (
        <div className='question-container'>
            <h3>{question}</h3>
            <div className='option'>
                  {
                options.map(option => <Option key={option.id } option={option}></Option>)
            }
          </div>

        </div>
    );
};

export default QuizQuestion;