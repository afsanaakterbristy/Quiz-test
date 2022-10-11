import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectCart.css'

const SubjectCart = ({ subject }) => {
    //console.log(subject);
    
    const { id, name, logo } = subject;
  
    return (
        <div className='subject-conainer'>
           <div className='subject'>
            <img src={logo} alt="" />
            <div className='subject-info'>
            <p className='name'>{name}</p>
        
            </div>
            <button className='btn-cart'>
                <Link to={`../quiz/${id}`}><p>Start For Quiz</p></Link>
            </button>
        </div>
        </div>
    );
};

export default SubjectCart;