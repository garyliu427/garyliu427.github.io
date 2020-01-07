import React, { Component } from "react";
import { Element } from "react-scroll";
import WorkTag from "./widgets/WorkTag";
//import { NavLink } from "react-router-dom";
import MQ from "../img/MQ.png";
import Coursera from "../img/Coursera_logo.png";
import cateight from "../img/catEight.png";

class Resume extends Component {
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
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>
                    Macquarie University
                    <img src={MQ} alt="logo-mq" />
                  </h3>
                  <p className="info">
                    Bachelor of Information Technology major in Data Science{" "}
                  </p>
                  <p className="date">2018 - 2020</p>

                  <p className="resume__subject-title">Relevant Subjects:</p>
                  <ul className="resume__subject-list">
                    <li>Data Analysis</li>
                    <li>Statistics</li>
                    <li>Database System</li>
                    <li>Big Data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <WorkTag
                company="CatEight"
                logo={
                  <img
                    className="cateight"
                    src={cateight}
                    alt="logo-cateight"
                  />
                }
                title="Data Entry"
                year="Aug 2019 - Oct 2019"
                desc={
                  <ul>
                    <li>
                      Consummate database for the Institude in Australian in
                      order to{" "}
                    </li>
                  </ul>
                }
              />
            </div>
          </div>

          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Certificate</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>
                    IBM Data Science Specialization
                    <img src={Coursera} alt="coursera-logo" />
                  </h3>
                  <p className="info">Issuing Organization by Coursera </p>
                  <p className="date">Issued Jan 2020 - No Expiration Date</p>
                  <p className="ID">Credential ID: YPBW6HLRBVCQ</p>

                  <div className="columns download">
                    <p>
                      <a
                        href={process.env.PUBLIC_URL + "/Coursera.pdf"}
                        className="button"
                        download
                      >
                        <i className="fa fa-download"></i>Downlaod Credential
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}

export default Resume;
