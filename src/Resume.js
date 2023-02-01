import React from "react";

const Resume = (props) => {
  return (
    <div id="resume">
      <a href="download" download="Resume.pdf">
        Resume
      </a>
      <h2>Resume</h2>
      <h4>Junior Software Engineer at Nomad Credit</h4>
      <p>August 2022 - present</p>
      <ul>
        <li>Build front-end features with React for web application.</li>
        <li>Develop tests with Playwright.</li>
      </ul>
      <h4>Student at the Grace Hopper Program</h4>
      <p>February 2022 - May 2022</p>
      <ul>
        <li>
          Completed 17-week coding bootcamp focused on fullstack JavaScript
          development.
        </li>
        <li>
          Completed two group projects, a mock e-commerce site and a desktop
          application to track and help improve posture.
        </li>
      </ul>
      <h4>Neuropsychologist at Duly Health & Care</h4>
      <p>March 2021 - October 2021</p>
      <ul>
        <li>
          Conducted neuropsychological evaluations with children and teens for
          learning differences
        </li>
      </ul>
    </div>
  );
};

export default Resume;
