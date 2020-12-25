import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="intro">
          <div className="intro-1">Hello, World!</div>

          <div className="title">My Name is Yashvi.</div>

          <div className="intro-2">
            I like solving problems. Even the really hard ones.
          </div>
          <button className="but">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/projects"
            >
              <div className="button-text">View Projects</div>
            </Link>
          </button>
          <div class="socials">
            <a
              href="https://www.linkedin.com/in/yashvi-parmar/"
              class="fa fa-linkedin"
              aria-hidden="true"
            ></a>
            <a
              href="https://github.com/yashvi-parmar"
              class="fa fa-github"
              aria-hidden="true"
            ></a>

            <a
              href="mailto: yparmar@uwaterloo.ca"
              class="fa fa-envelope"
              aria-hidden="true"
            ></a>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
