import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'



const Header = () => {
    return (
        <div>
            <nav className='header'>
               
                <div className='quiz-title'>
                    
                        <h2>Assigment Quiz Test</h2>
                </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/statisticschart'>StatisticsChart</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            </nav>
            
            
      </div>
    );
};

export default Header;