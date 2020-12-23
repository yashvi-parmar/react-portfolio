import React, { Component } from "react";
import "../../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>PORTFOLIO WEBSITE</h3>
            <div className="project-container">
              <img className="project-i" src="port.jpg.png" />
              <div className="img-des">
                <h3>Description</h3>
                <p>
                  A portfolio website to showcase my side projects through a
                  more interactive, and informal medium.{" "}
                </p>
                <h3>Tools</h3>
                <p>
                  The following tools were used to create this project:
                  React.js, CSS
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Task Manager Application</h3>
            <div className="project-container">
              <img className="project-i" src="ttd.png" />
              <div className="img-des">
                <h3>Description</h3>
                <p>
                  Task manager application to assist users track daily tasks.
                </p>
                <h3>Tools</h3>
                <p>
                  The following tools were used to create this project: HTML,
                  CSS, JavaScript
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Personal Management Tool</h3>
            <div className="project-container">
              <img className="project-i" src="port.jpg.png" />
              <div className="img-des">
                <h3>Description</h3>
                <p>
                  A personal management tool designed for 1A Management students
                  to help track deliverables and events throughout the term.
                </p>
                <h3>Tools</h3>
                <p>
                  The following tools were used to create this project:
                  React.js, CSS
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Decision Support Tool</h3>
            <div className="project-container">
              <img className="project-i" src="port.jpg.png" />
              <div className="img-des">
                This portfolio website was created to further develop my
                knowledge of React.js.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
