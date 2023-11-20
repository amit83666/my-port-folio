import React from "react";
import './Nav.css';
const Nav = () => {
  return (
    <div className="nav-section">
      <img src="./assets/port1.png" alt="nav-icon"/>
      <div className="nav-link">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/techstack">Tech Stack</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
      </div>
      <div>
      <a href="#">
        <img src="./assets/github-icon.png" alt="" />
      </a>
      <a href="#">
        <img src="./assets/twitter-icon.png" alt="" />
      </a>
      <a href="#">
        <img src="./assets/linkedin-icon.png" alt="" />
      </a>
      </div>
    </div>
  );
};

export default Nav;
