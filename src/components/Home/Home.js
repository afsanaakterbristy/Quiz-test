import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectCart from '../SubjectCart/SubjectCart';
import headerimage from '../../assets/headerimage2.jpg'
import './Home.css'

const Home = () => {
    const allSubject = useLoaderData()
    // console.log(allSubject.data)
    return (
        <div>
             <header className='main-header'>
                <img className='header-img' src={headerimage} alt="" />
                <h2 className='header-title'>Assessment, instruction, and practice that motivate every student to mastery.</h2>
            </header>
             <div className='subject-container'>
            {
                allSubject.data.map(subject=><SubjectCart key={subject.id} subject={subject}></SubjectCart>)
            }
        </div>
       </div>
    );
};

export default Home;