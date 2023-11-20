import React from "react";
import Project from "./components/Project";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <div className="project-page">
        <h2>Projects</h2>
        <p>Things I’ve built so far</p>
      </div>
      <Project />
    </div>
  );
};

export default Projects;
