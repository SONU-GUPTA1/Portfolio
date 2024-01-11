import React from 'react'
import "./About.css"
import { Link, NavLink } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const About = () => {
  return (
    <div className='a-container'>
      <div className="a-section">
        <h1>About Me</h1> 
      </div>
      <div className="a-section">
        <h2>My name is Sonu Kumar <span>...</span></h2>
        <div ><p className='para'>"I hold a B.Tech degree from the prestigious Bansal Institute of Engineering and Technology in Lucknow. However, my true passion lies in programming, which drove me to venture into the dynamic and ever-evolving IT industry. With 6 months of invaluable experience in Full Stack development, I have honed my skills in a diverse array of languages and frameworks, including JavaScript, HTML, CSS, React JS, Bootstrap, Node.js, and MongoDB. During my journey, I pursued a rigorous full stack web development course, where I unleashed my creativity to build numerous projects. Specializing in crafting dynamic web pages with seamless API integration and powerful CRUD operations, I have always prioritized responsive design to enhance user experiences. My professional strengths are anchored in my exceptional logical reasoning, practical problem-solving, and a collaborative spirit that thrives in team environments. Meticulously attending to every detail, I ensure the utmost security in all production processes. Now, I am eagerly seeking opportunities to unleash my talents as a front-end programmer and web developer, or any related role that allows me to continue learning and advancing my skills in software development and the art of constructing captivating web interfaces. Let's create an innovative digital future together!"</p></div>
        
      </div>
      <div className="a-section">
        <div className="social-container">
        <div className="social">
          <div className="social-item-container">
          <div className="social-item">
            <h3>Date:</h3><span>10-12-2000</span>
          </div>
          <div className="social-item">
            <h3>Email:</h3><span>sonukumarguptasonu546@gmail.com</span>
          </div>
          <div className="social-item">
            <h3>Mobile no: </h3><span>6351577624</span>
          </div>
          <div className="social-item">
            <h3>City: </h3><span>Gurgaon</span>
          </div>
          <div className="social-item">
            <h3>Github: </h3><span>https://github.com/SONU-GUPTA1</span>
          </div>
          <div className="social-item">
            <h3>Graduation:</h3><span>B.Tech(Engineering)</span>
          </div>
          <div className="social-item">
            <h3>Country:</h3><span>India</span>
          </div>
          
          </div>
          
          <div className="contact">
            <Link to="/contact">
            <button className='contact-me'>Contact Me</button>
            </Link>
          </div>
        </div>
        <div className="skills">
          <div className="skills-item">
            <h3>HTML</h3></div>
          <div className="skills-item">
            <h3>CSS</h3>
          </div>
          <div className="skills-item">
            <h3>JavaScript</h3>
          </div>
          <div className="skills-item">
            <h3>React JS</h3>
          </div>
          <div className="skills-item">
            <h3>
              Node Js
            </h3>
          </div>
          <div className="skills-item">
            <h3>Express JS</h3>
          </div>
          <div className="skills-item">
            <h3>JAVA</h3>
          </div>
          
        </div>
        </div>
      </div>
      <div className="a-section">
        <div className="ee">
          <h2>Education</h2>
          <h2>Experience</h2>
        </div>
      </div>
      <div className="a-section">
        <div className="education_experience">
          <div className="education">
             <div className="Edu_list">
              <div className="date"><CalendarMonthIcon/><p>2017 - 2021</p></div>
              <div className="ed"><h3>B.Tech</h3></div>
              <div className="summary"><p>B.Tech in Mechanical Of Engineering from Bansal Institute Of Engineering And Technology.</p></div>
             </div>
             <div className="Edu_list">
              <div className="date"><CalendarMonthIcon/><p>2016 - 2017</p></div>
              <div className="ed"><h3>Intermediate</h3></div>
              <div className="summary"><p>Intermediate done at S.R.D.I.College, Kushinagar.</p></div>
             </div>
             <div className="Edu_list">
              <div className="date"><CalendarMonthIcon/><p>2014 - 2015</p></div>
              <div className="ed"><h3>High School</h3></div>
              <div className="summary"><p>High School done at J.A.I.C, Kushinagar.</p></div>
             </div>
          </div>
          <div className="experience">
            <div className="ashvik">
              <div className="Edu_list">
              <div className="date"><CalendarMonthIcon/><p>2023 - Present</p></div>
              <div className="ed"><h3>Ashvik Technosoft India pvt ltd</h3></div>
              <div className="summary"><p>I have 7 months experience in Testing Engineer.</p></div>
              </div>
            </div>
            <div className="newton">
              <div className="Edu_list">
              <div className="date"><CalendarMonthIcon/><p>2022 - 2023</p></div>
              <div className="ed"><h3>Full Stack Web Development</h3></div>
              <div className="summary"><p>Apprenticeship in Full Stack Web Development from Newton School</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About