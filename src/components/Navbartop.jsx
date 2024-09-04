import React from 'react';
import '../styles/Navbartop.css';
import btn from '../assets/code.png';
import { Link } from 'react-scroll';
function Navbartop() {
  return (
    <div className='nav-div-main-container'>  
      <div className='nav-secnd-div'>
        <div className='nav-img-div'>
          <img src={btn}/>
        </div>
        <div className='nav-text-div'>
          <h1>&lt; <span className='navbar-span'>&#47;</span> &gt;</h1>
        </div>
        <div className='nav-types-div'>
          <Link to={"about"} smooth duration={100} className="nav-link">About</Link>
          <Link to={"skills"} smooth duration={200} className="nav-link">Skills</Link>
          <Link to={"experience"} smooth duration={300} className="nav-link">Experience</Link>
          <Link to={"projects"} smooth duration={400} className="nav-link">Projects</Link>
          <Link to={"contact"} smooth duration={500} className="nav-link">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbartop;
