import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import headerimage from '../../assets/headerimage2.jpg'


const Header = () => {
    return (
        <div>
            <nav className='header'>
               
                <div className='quiz-title'>
                    
                        <h2>Assigment Quiz Test</h2>
                </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/quizs'>Allquiz</Link>
                <Link to='/statisticschart'>StatisticsChart</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            </nav>
            <header className='main-header'>
                <img className='header-img' src={headerimage} alt="" />
                <h2 className='header-title'>Assessment, instruction, and practice that motivate every student to mastery.</h2>
            </header>
      </div>
    );
};

export default Header;