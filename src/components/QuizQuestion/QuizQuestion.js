import React from 'react';
import Option from '../Option/Option';
import './QuizeQuestion.css'

const QuizQuestion = ({quizQuestion }) => {
   const {options,question,id,correctAnswer}=quizQuestion
    console.log(quizQuestion);
    return (
        <div className='question-container'>
             <h3>{question}</h3>
                <button className='btn-eye'>ok</button>

            <div className='option'>
                  {
                options.map(option => <Option key={option.id } option={option} correctAnswer={correctAnswer}></Option>)
            }
          </div>

        </div>
    );
};

export default QuizQuestion;