import React, {Component} from 'react';
// import {Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Element} from 'react-scroll';


class About extends Component {

  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

  scroller.scrollTo('scroll-about', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 40, // Scrolls to element + 50 pixels down the page
})

  }

  render(){
    return(
 <Element name="scroll-about">
    <section id="about">
         <div className="row">

  <div className="three columns">

            <div className="my-avatar"></div>

           </div>

            <div className="ten columns">
              <div>
                <div>
                  <h2>About Me</h2>

                  <p>
                    I started my bachelor of Information Technology in 2018. I have been learning data science, statistics, database and web design during degree.
                  <br/>
                    {/* master */}
                  <br/>
                    {/* after graduation */}
                  </p>
                </div>
              </div>



               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
   						   <span>Xiaotian Liu</span><br/>
   						   <span>Unit 607, 120 Herring Road<br/>
   						         Macquarie Park NSW 2113
                        </span><br/>
                      <span>(+61) 401 505 565</span><br/>
                        <span>cblxxlx@gmail.com</span>
   					   </p>

                  </div>

                  <div className="columns download">
                     <p>
                        <a href={process.env.PUBLIC_URL + '/XiaotianLiu.pdf'} className="button" download><i className="fa fa-download"></i>Download Resume</a>
                   </p>
                  </div>

               </div>

            </div>

         </div>

      </section>
    </Element>
    );
  }
}

export default About;
