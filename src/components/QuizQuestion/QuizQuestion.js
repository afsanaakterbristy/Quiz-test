import React from 'react';
import Option from '../Option/Option';

const QuizQuestion = ({quizQuestion }) => {
   const {options,question,id}=quizQuestion
    //console.log(id);
    return (
        <div>
            <h3>{question}</h3>
            {
                options.map(option => <Option key={option.id } option={option}></Option>)
            }

        </div>
    );
};

export default QuizQuestion;