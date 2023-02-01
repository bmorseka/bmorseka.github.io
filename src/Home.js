import React from "react";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Navigation from "./Navbar";
import ContactMe from "./ContactMe";
import MySkills from "./Skills";
import Resume from "./Resume";

const Home = (props) => {
  return (
    <div className="projects-container">
      <Navigation />
      <Landing />
      <AboutMe />
      <Projects />
      <MySkills />
      <ContactMe />
    </div>
  );
};

export default Home;
