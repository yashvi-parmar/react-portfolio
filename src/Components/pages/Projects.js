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
                <h3>TOOLS: React.js</h3>
                <p>
                  This portfolio website was created using Create React App.
                  Create React App creates a front-end pipeline that can be used
                  with any backend. I was interested in working in this
                  environment as it is a comfortable starting point for learning
                  React.
                </p>
                <p>
                  Through this project I developed a better understanding of
                  React including React Router and React Slick (to build this
                  carousel!). I also worked with CSS Flex Box for styling
                  purposes.
                </p>
                <p>
                  <a href="https://github.com/yashvi-parmar/react-portfolio2.0">
                    View the source code here!
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>TASK MANAGER APPLICATION</h3>
            <div className="project-container">
              <img className="project-i" src="todo.png" />
              <div className="img-des">
                <h3>TOOLS: HTML, CSS, JavaScript</h3>
                <p>
                  This is a task manager application that allows users to track
                  daily tasks. Users simply enter in their tasks, click on the
                  task to show completion, as well as remove tasks that are no
                  longer appropriate.
                </p>
                <p>
                  After completing a "LinkedIn Learning" course in JavaScript
                  essentials, I decided to venture out and develop an
                  application that would be useful for me as well. I further
                  developed my knowledge of HTML and CSS, as well as learning
                  JavaScript.
                </p>
                <a href="https://github.com/yashvi-parmar/to-do-list">
                  View the project here!
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>PERSONAL MANAGEMENT TOOL</h3>
            <div className="project-container">
              <img className="project-i" src="excel.png" />
              <div className="img-des">
                <h3>TOOLS: Excel (VBA, Macros)</h3>
                <p>
                  This personal management tool was designed with the purpose to
                  help 1A management engineering students effectively track all
                  deliverables and events throughout the term.
                </p>
                <p>
                  VBA (Visual Basic for Applications) is Microsoft's programming
                  language for Excel. This project helped solidfy my foundations
                  in VBA, while working with various functions such as command
                  buttons, userforms and modules.
                </p>
                <a href="https://drive.google.com/drive/folders/1_UZQfbdK51IqVhHvxFeNp7I0OKPfamh_?usp=sharing">
                  View this project here!
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>DECISION SUPPORT TOOL</h3>
            <div className="project-container">
              <img className="project-i" src="excel.png" />
              <div className="img-des">
                <h3>TOOLS: Excel (VBA, Pivot Tables, Lookups)</h3>
                <p>
                  This decision support tool was created for a client and their
                  team to combat the challenges with working remotely. This was
                  a term team project for one course during my first term of
                  university. We went through a full design cycle, and dove into
                  project management as we were expected to produce several
                  technical documents (e.g. functional requirements, scoping,
                  design specifications, etc.)
                </p>
                <p>
                  My role on the team was to create a visual interface that
                  would allow our client's team to visually see and update
                  project progress. I used VBA and pivot tables to create an
                  interactive dashboard that would compare various different
                  sets of data that assure the team is consistently on the same
                  page throughout development.
                </p>
                <a href="https://drive.google.com/drive/folders/1npb3C2VCAhRErzJmVOr1BgBPq2cgrDlP?usp=sharing">
                  View this project here!
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
