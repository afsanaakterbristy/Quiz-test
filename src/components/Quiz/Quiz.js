import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectCart from '../SubjectCart/SubjectCart';

const Quiz = () => {
     const allSubject = useLoaderData()
    // console.log(allSubject.data)
    return (
        <div>
            
            <div className='subject-container'>
                
            {
                allSubject.data.map(subject=><SubjectCart key={subject.id} subject={subject}></SubjectCart>)
            }
        </div>
       </div>
    );
};

export default Quiz;