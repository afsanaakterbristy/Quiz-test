import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './Quiz.css'

const Quizs = () => {
    const quiz = useLoaderData().data
    const quizs = quiz.questions;
    //console.log(quizs)
    
    return (
        <div className='quiz-container'>
            <h2 className='quiz-title'>Quiz Start</h2>
            {
                quizs.map(quizQuestion => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion}></QuizQuestion>)
            }
        </div>
    );
};

export default Quizs;