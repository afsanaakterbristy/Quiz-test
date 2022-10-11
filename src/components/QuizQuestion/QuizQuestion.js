import React from 'react';
import Option from '../Option/Option';
import './QuizeQuestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({quizQuestion }) => {
    const { options, question, correctAnswer } = quizQuestion
    const handleAnswer = (correctAnswer) => {
        toast(`${correctAnswer}`)
    }
    //console.log(quizQuestion); 
    return (
        <div className='question-container'>
             <h3>{question}</h3>
                <button onClick={()=>handleAnswer(correctAnswer)} className='btn-eye'><FontAwesomeIcon icon={faEye} /></button>

            <div className='option'>
                  {
                    options.map(option => <Option key={option.id} option={option} correctAnswer={correctAnswer}></Option>)
            }
          </div>

        </div>
    );
};

export default QuizQuestion;