import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import TechStack from "./TechStack";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="text-white">
      <div className="px-16 ">
        <div id="home">
          <Header />
        </div>
        <div id="profile" className="">
          <Profile />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="tech" className="">
          <TechStack />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </div>
      <div id="contact" className="">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
