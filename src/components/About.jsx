import React from "react";
import "../styles/About.css";
import aboutimg from '../assets/manwithlaptop.png';
function About() {
  return (
    <div className="main-container" id="card-main-container" name="about">
      <div className="card-container">
        <div className="img-container">
          <img src={aboutimg} />
        </div>
        <div className="div-description">
          <h1>
            <span className="spam-tag">About</span> Me!!
          </h1>
          <p>
            As a passionate and enthusiastic MERN stack developer, I have built
            a robust foundation in JavaScript, React, Node.js, Express.JS, and
            MongoDB. My dedication lies in delivering high-quality, efficient
            web applications with exceptional user experiences. I embrace
            challenges with enthusiasm, constantly seeking opportunities for
            growth and improvement. Collaborating seamlessly with teams, I foster a positive
            and collaborative environment that brings out the best in everyone
            involved. My goal is to elevate the web development landscape by
            continuously pushing the boundaries of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
