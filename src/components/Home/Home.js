import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectCart from '../SubjectCart/SubjectCart';

const Home = () => {
    const allSubject = useLoaderData()
    // console.log(allSubject.data)
    return (
        <div>
            {
                allSubject.data.map(subject=><SubjectCart key={subject.id} subject={subject}></SubjectCart>)
            }
        </div>
    );
};

export default Home;