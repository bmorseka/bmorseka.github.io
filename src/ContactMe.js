import React from "react";
import linkedIn from "./linkedin.png";
import github from "./github.png";
import { Link } from "react-router-dom";

const ContactMe = (props) => {
  return (
    <div id="contact-container">
      <h2>Get in touch!</h2>
      <br></br>
      <div className="email-address">b.morsekarzen@gmail.com</div>
      <a
        href="https://www.linkedin.com/in/brooke-stenglein/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="linkedIn-png" />
      </a>
      <a href="https://github.com/bmorseka" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub-png" id="github" />
      </a>
      <a
        href="https://docs.google.com/document/d/1wlWUy9nAdRrlsDcq1s5s27I0zAeAHAVY/"
        filename="BrookeStenglein_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume"
      >
        Resume
      </a>
    </div>
  );
};

export default ContactMe;
