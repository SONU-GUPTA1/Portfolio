import React from "react";
import "./Projects.css";
import Ecommerce from "../image/Ecommerce.png";
import Quiz from "../image/Quiz.png";
import Tvshow from "../image/Tvshow.png";
import University from "../image/University.png";
import reactjs from "../image/reactjs.jpg";
import HTML from "../image/HTML.jpg";
import CSS from "../image/CSS.jpg";
import JavaScript from "../image/JavaScript.jpg";
import PasswordGenerator from "../image/PasswordGenerator.png";

const Projects = () => {
  return (
    <div className="Project_Container">
      <div className="p_section">
        <h1>Projects</h1>
      </div>
      <div className="p_section">
        <div className="heading">
          <h2>My Recents Projects</h2>
        </div>
        <div className="projects">
          <div className="project_list">
            <a
              href="https://cosmic-daifuku-0d78dc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Ecommerce} alt="" />
            </a>
          </div>
          <div className="project_list">
            <a
              href="https://sonu-gupta1.github.io/tv-maze/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Tvshow} alt="" />
            </a>
          </div>
          <div className="project_list">
            <a
              href="https://sonu-gupta1.github.io/Js-Quiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Quiz} alt="" />
            </a>
          </div>
          <div className="project_list">
            <a
              href="https://sonu-gupta1.github.io/University-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={University} alt="" />
            </a>
          </div>
          <div className="project_list">
            <a
              href="https://peaceful-meringue-5c678e.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PasswordGenerator} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="p_section">
        <div className="heading">
          <h2>Certifications :</h2>
        </div>
        <div className="projects">
          <div className="project_list">
            <img src={reactjs} alt="" />
          </div>
          <div className="project_list">
            <img src={JavaScript} alt="" />
          </div>
          <div className="project_list">
            <img src={CSS} alt="" />
          </div>
          <div className="project_list">
            <img src={HTML} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
