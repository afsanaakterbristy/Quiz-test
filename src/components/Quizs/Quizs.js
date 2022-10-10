import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quizs = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div>
            <h2 className='quiz-title'>Quiz Start</h2>
        </div>
    );
};

export default Quizs;