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
    <div className="text-white w-full">
      <div id="home">
        <Header />
      </div>
      <div className="px-16 ">
        <div id="profile" className="pt-6">
          <Profile />
        </div>
        <div id="about" className="pt-10">
          <About />
        </div>
        <div id="tech" className="pt-16">
          <TechStack />
        </div>

        <div id="projects" className="pt-10">
          <Projects />
        </div>
      </div>
      <div id="contact" className="mt-28 pt-4">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
