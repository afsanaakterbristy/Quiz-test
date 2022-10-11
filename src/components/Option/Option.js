import React from 'react';
import './Option.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ option,correctAnswer,id }) => {
    //console.log(correctAnswer);
    const handleCorrectAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success("Wow Your Answer Ccorrect!");
        } else {
             toast.warn("Sorry Wrong Answer !");
        }
    }
    return (
        <div className='option-container'>
            <div>
                   <input onChange={()=>handleCorrectAnswer(option)} className='option' type="radio" id={option} name="option" value={option}/>
                <label className='' htmlFor={option}> {option}</label>
                
         </div>
        </div>
    );
};

export default Option;