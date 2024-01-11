import React from 'react'
import "./Home.css";
import sonuimage from "../image/sonuimage.jpg"
import { useTypewriter , Cursor} from 'react-simple-typewriter'

const Home = () => {

  const [tex] = useTypewriter({
    words: ['Full Stack Developer', 'Frontend Developer', 'React JS Developer', 'Web Developer'],
    loop: {},
    typeSpeed: 120
  })

  return (
    <div className='container'>
      <div className="data1">
        <h1>Hello, my name is <span>Sonu Kumar</span></h1>
        <h1>I am a <span >{tex}</span><Cursor/></h1>
        <p>I am a dedicated Full-Stack Developer with 1 year of hands-on experience in building websites. Throughout my journey, I have immersed myself in various technologies, including HTML, CSS, JavaScript, React JS, Bootstrap, Node JS, MongoDB, Manual Testing, Unit Testing, and responsive design.</p>
        <button className='cv_btn'>
        <a className='cv_btn'
        href="/Resume.pdf"  
        target="_blank"
        rel="noopener noreferrer" 
        style={{  textDecoration: 'none'}}
        >
        Visualize CV
      </a>
          </button>
        
        </div>   
      <div className="data">
        <img src={sonuimage} alt="" />
        </div>   
    </div>
  )
}

export default Home