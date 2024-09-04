import React from "react";
import "../styles/Project.css";
import Carousel from 'react-bootstrap/Carousel';

import itsmeimg from '../assets/amanwithlapto.png';
import project1 from "../assets/store.png"
import project2 from "../assets/medstart.png"
import project3 from "../assets/noteland.png"
import project4 from "../assets/furniture.png"
import project5 from "../assets/resatrent.png"
import project6 from "../assets/instagram.png"
import project7 from "../assets/calsi.png"
import project8 from "../assets/searchengine.png"


function Project() {

  const projects = [
    {
      img: project1,
      name: "InstaBuy",
      github_link: "https://github.com/VLingarao",
      live_link: "https://insta-buy-project02.netlify.app/",
    },
    {
      img: project2,
      name: "Med Start",
      github_link: "https://github.com/VLingarao",
      live_link: "https://med-start-project04.netlify.app/",
    },
    {
      img: project3,
      name: "Note Land",
      github_link: "https://github.com/VLingarao",
      live_link: "https://voluble-genie-d0e5a0.netlify.app/",
    },
    {
      img: project4,
      name: "Furniture Web",
      github_link: "https://github.com/VLingarao",
      live_link: "https://my-furniture-cynohub.netlify.app/",
    },
    {
      img: project5,
      name: "Restarent Food",
      github_link: "https://github.com/VLingarao",
      live_link: "https://my-restarent-cynohub.netlify.app/",
    },
    {
      img: project6,
      name: "Instagram Profile",
      github_link: "https://github.com/VLingarao",
      live_link: "https://instgram-profile-page.netlify.app/",
    },
    {
      img: project7,
      name: "Calculator",
      github_link: "https://github.com/VLingarao",
      live_link: "https://calculator-website-my.netlify.app/",
    },
    {
      img: project8,
      name: "Search Engine",
      github_link: "https://github.com/VLingarao",
      live_link: "https://exquisite-hotteok-c46746.netlify.app/",
    },
  ];

  return (
    <div className="project-div-main" id="project-div-main" name="projects">
      <div className="project-scend-div-container">
        <div className="project-card-text-container">
          <h1>
            <span className="project-div-span">Proje</span>cts
          </h1>
          <div className="carousel-div">
            <Carousel>
              {projects.map((project, index)=>(
                 <Carousel.Item key={index} interval={1000}>
                 <div className="carousels-data-continer">
                   <div className="carousel-img-div">
                     <img src={project.img} alt={project.name} />
                   </div>
                   <h3>{project.name}</h3>
                   <div className="buttons-continer">
                     <a href={project.github_link} target="_blank">
                       <button className="carousels-button-01">GitHub</button>
                     </a>
                     <a href={project.live_link} target="_blank">
                       <button className="carousels-button-02">Live Demo</button>
                     </a>
                   </div>
                 </div>
               </Carousel.Item>
              ))}
              </Carousel>
          </div>

        </div>

        <div className="project-pics-div">
          <img src={itsmeimg} alt="itsmeimg" />
        </div>
      </div>
    </div>
  );
}

export default Project;

