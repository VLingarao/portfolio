import React from "react";
import "../styles/Experience.css";
import interpe from '../assets/interpe.png';
import cynohub from "../assets/cynohub.jpeg";
function Experience() {
  return (
    <div className="exp-div-container" name="experience">
      <div className="exp-secnd-div">
        <div className="exp-head-text-div">
          <h1>
            <span>Exper</span>ience
          </h1>
        </div>
        <div className="exp-description-div">
          <div className="exp-banner-div">
            <div className="exp-content-div">
              <h1>Cynohub</h1>
              <h3>Fullstack development trainee </h3>
              <ul>
                <li>
                In-depth knowledge of workflows and full-stack technologies 
                involves mastering various tools, learning, and continuously adapting.
                </li>
                <li>
                I gained valuable industry knowledge and expertise through 
                active participation in diverse tasks under seasoned industrial mentors.
                </li>
              </ul>
            </div>
            <div className="exp-company-pic">
              <img src={cynohub} />
            </div>
          </div>
          <div className="exp-banner-div">
            <div className="exp-content-div">
              <h1>Interpe</h1>
              <h3>Web Development Internship</h3>
              <ul>
                <li>
                I have gained a strong command of front-end 
                technologies such as HTML, CSS, JavaScript, and React.js.
                </li>
                <li>
                During my 4-week internship, I successfully completed several 
                projects that not only demonstrated my skills and learning but also 
                solidified my understanding of web development concepts.
                </li>
              </ul>
            </div>
            <div className="exp-company-pic">
              <img src={interpe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
