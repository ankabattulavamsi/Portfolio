import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import TechStack from "./TechStack";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="mx-6 text-white">
      <div id="home">
        <Header />
      </div>
      <div id="profile" className="">
        <Profile />
      </div>
      <div id="tech" className="">
        <TechStack />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="cnntact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
