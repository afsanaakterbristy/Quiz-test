import React from 'react';
import './SubjectCart.css'

const SubjectCart = ({ subject }) => {
    //console.log(subject);
    
    const { name, logo } = subject;
    return (
        <div className='subject-conainer'>
           <div className='subject'>
            <img src={logo} alt="" />
            <div className='subject-info'>
            <p className='name'>{name}</p>
        
            </div>
            <button className='btn-cart'>
                <p>Start for quiz</p>
            </button>
        </div>
        </div>
    );
};

export default SubjectCart;