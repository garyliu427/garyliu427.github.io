import React, { Component } from "react";
import { Element } from "react-scroll";
//import { NavLink } from "react-router-dom";

class Portfolio extends Component {
  componentDidMount() {
    var Scroll = require("react-scroll");
    var scroller = Scroll.scroller;

    scroller.scrollTo("scroll-resume", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0 // Scrolls to element + 50 pixels down the page
    });
  }

  render() {
    return (
      <Element name="scroll-resume">
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>
                    **
                    {/* <img src={MQ} alt="logo-mq" /> */}
                  </h3>
                  <p className="info">
                    **{" "}
                  </p>
                  <p className="date">#Year</p>

                  <p className="resume__subject-title">Relevant Acomplishment:</p>
                  <ul className="resume__subject-list">
                    <li>*</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}

export default Portfolio;