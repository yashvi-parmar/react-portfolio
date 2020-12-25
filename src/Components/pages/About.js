import React from "react";
import "../../App.css";

function About() {
  return (
    <>
      <div className="container-a">
        <div className="about-i">
          <img src="yashvi.jpg"></img>
        </div>
        <div className="about-w">
          <h3>Nice to meet you!</h3>
          <div className="w-p">
            I’m a first year management engineering student at the University of
            Waterloo. Over the course of my five year degree I plan on exploring
            various different fields in engineering and tech to diversify my
            skill set. Currently, I am on the Industry 4.0 design team, where I
            am a web development team member. I work with HTML and CSS, more
            specifically bootstrap to design the website for their annual
            competitions.
          </div>
          <h3>Technical Skills</h3>
          <div className="w-p">
            Technical skills I have experience with include the following:
            <p style={{ fontStyle: "italic" }}>
              HTML, CSS, JavaScript (Library: React.js), Python, Java and
              Microsoft Excel (VBA, Macros, Pivot Tables, Lookups)
            </p>
            My work with these skills can be demonstrated through the various
            projects I have. Recently, I have been interested in JavaScript and
            am working on developing a better knowledge of the library React.js
            and the framework Node.js.
          </div>
          <h3>Education</h3>
          <div className="w-p">
            I often get asked, “Why management engineering?”, “What do
            management engineers even do?”. All expected questions as this
            program is very unique and not offered at many other universities.
            As of my experiences in the program thus far, I can describe
            management engineering students as creative problem solvers. We
            focus on efficiency and effectiveness when analyzing management
            systems. Management engineering is often compared to industrial
            engineering, as the two programs are very similar in terms of the
            courses we take. The main difference includes management engineering
            having a greater focus on information and software systems than
            traditional industrial engineering programs.
          </div>
          <h3>Future</h3>
          <div className="w-p">
            As I begin my professional career, I hope to explore various tech
            domains and work in different teams to become a more well-rounded
            student. I am actively seeking summer 2021 internship opportunities
            as well.
          </div>
          <div className="w-s"></div>
        </div>
      </div>
    </>
  );
}

export default About;
