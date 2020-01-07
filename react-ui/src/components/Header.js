import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import ChangingTexts from './widgets/ChangingTexts';
import TypingTexts from 'react-rotating-text';

class Header extends Component{

  render(){
    return(
      <div>
      <header id="home">

         <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               {/* <li className="current"><NavLink to="/home">Home</NavLink></li> */}
               <li><NavLink exact to="/about">About</NavLink></li>
               <li><NavLink exact to="/resume">Resume</NavLink></li>
               <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">

               <h1 className="responsive-headline">Xiaotian Liu</h1>
               <h3 className="banner-text-title">
               <span>I'm currently a Student who  </span>
               <span className='position-title'><TypingTexts items={['major in Data Science.','loves photography.','amateur in PhotoShop.']} /> </span>
               </h3>
                 <h3> 
                     Always have passion to explore new technology
                 </h3>
               <hr />
               <ul className="social">
                  <li><a href="https://www.facebook.com/garyliu427" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/xiaotian-liu-016137149/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://github.com/garyliu427?tab=repositories" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a></li>
               </ul>
            </div>
         </div>

          {/*<p className="scrolldown">
             <a className="smoothscroll" href="#about"><i className="fas fa-chevron-down"></i></a>
          </p>*/}

      </header>

    </div>
    );
  }
}

export default Header;
