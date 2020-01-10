import React, { Component } from "react";
import { Element } from "react-scroll";
//import { NavLink } from "react-router-dom";
import ImageGallery from "./widgets/ImageGallery";

const photos = [
    { src: 'https://source.unsplash.com/SKyTtDfqoSo', width: 3, height: 2 },
    { src: 'https://source.unsplash.com/CLVxw4WmAdM', width: 3, height: 3 },
    { src: 'https://source.unsplash.com/uAY50KJs4ms', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/dU134-jvKqw', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/INr-6imR5EY', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/C2ynnglJfhA', width: 3, height: 4 },
  ];

class Gallery extends Component {
  componentDidMount() {
    var Scroll = require("react-scroll");
    var scroller = Scroll.scroller;

    scroller.scrollTo("scroll-resume", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0 
    });
  }

  render() {
    return (
      <Element name="scroll-graphic">
        <div className="portfolio-graphic">
          <ImageGallery photos={photos} />
        </div>
      </Element>
    );
  }
}

export default Gallery;
