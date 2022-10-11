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
            <h2 className='quiz-title2'>Quiz Start of {quiz.name}</h2> 
            {
                quizs.map((quizQuestion,index) => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion} index={index}></QuizQuestion>)
            }
        </div>
    );
};

export default Quizs;