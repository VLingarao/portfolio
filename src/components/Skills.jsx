import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import react from '../assets/react.png';
import github from '../assets/github.png';
import vscode from '../assets/vscode.png'
import "../styles/Skills.css";

function Skills() {
  const skills = [html, css, javascript, react, nodejs, mongodb, github, vscode];
  return (
    <div className="div-skills animate__animated animate__bounce" name="skills">
      <div className="div-main-container">
        <div className="tag-heading">
          <h1><span>Skil</span>ls</h1>
        </div>
        <div className="imgs-main">
          {skills.map((value) => (
            <div className="pic-container">
              <img src={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

// className="skills-main-container"

