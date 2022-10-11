import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css'




const Header = () => {
    // const [isMobile,setMobile]=useState(false)
     const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    return (

  <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            Assigment Quiz Test
          
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
             
                to="/"
              
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/quiz"
              
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                QuizTopic
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/statisticschart"
              
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                statisticschart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/blog"
              
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>


   
    );
};

export default Header;