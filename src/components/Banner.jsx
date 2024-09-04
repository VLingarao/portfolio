import React from "react";
import "../styles/Banner.css";
import Typing from 'react-typing-effect';
import BannerOne from "../assets/bannerpixletwo.jpg"
import BannerTwo from "../assets/bannerpixleone.jpg"

import resume from '../assets/venkatalingarao1452@gmailcom.pdf';
function Banner() {
  return (
    <div className="frist-div-container">
      <div className="secnd-div-container">
        <div className="third-heading-div">
          <div className="fourth-div-heading">
            <div className="content-div-heading">
              <h1>Hello!! I'm</h1>
            </div>
            <div className="content-div-heading-2">
              <h1>
                <h1>
                  <span className="name-heading-span">Venkata Lingarao </span>
                 <h1 style={{fontSize:'25px',fontWeight:'bolder'}}>
                  <Typing
                      text={['Web Developer !', 'Welcome to my site!']}
                      speed={100}
                      eraseSpeed={50}
                      eraseDelay={1000}
                      typingDelay={500}
                    />
                 </h1>
                </h1>
              </h1>
            </div>
            <div className="content-div-heading-3">
              <p>
                An architect of virtual worlds, I build immersive web
                experiences with the MERN stack. From conceptualization to
                deployment, I infuse creativity and precision into every line of
                code. Let's embark on a digital adventure together and shape the
                future of the web, one project at a time.
              </p>
            </div>
          </div>

          <div className="screen-button-div-main">
            <button className="screen-button-div-1">
              <a href={resume} download={true} target="_black">Resume</a>
              </button>
            <button className="screen-button-div-2">
              <a href="mailto:venkatalingarao1452@gmail.com" target="_black">Hire Me!!</a>
            </button>
          </div>
        </div>
      </div>

      <div className="screen-pic-div-main">
        <div className="screen-pic-div-1">
          <div className="screen-scend-pic-div-1">
            <img src={BannerOne} />
          </div>
        </div>
        <div className="screen-scend-pic-div-2">
          <img src={BannerTwo} />
        </div>
      </div>
    </div>
  );
}

export default Banner;


