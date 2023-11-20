import React from "react";
import Tech from "./components/Tech";
import Footer from "./components/footer";
import Projects from "./components/Project";
import './Home.css';
const Home = () => {
  return (
    <div>
      <div class="banner">
        <div class="banner-text">
          Hi👋,
          <br />
          My name is <br />
          <span class="amit-kumar">Amit kumar</span>
          <br />
          I build things for web <br />
        </div>
        <div class="banner-pic">
          <img src="./assets/amit-img1.png" alt="" />
        </div>
      </div>

      <div class="title">
        <h2>My Tech Stack</h2>
        <p>Technologies I’ve been working with recently</p>
      </div>

      <Tech />
      <div class="title">
        <h2>Projects</h2>
        <p>Things I’ve built so far</p>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
