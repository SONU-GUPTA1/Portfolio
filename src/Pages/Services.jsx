import React from 'react'
import "./Services.css"
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import SearchIcon from '@mui/icons-material/Search';
import AnimationIcon from '@mui/icons-material/Animation';

const Services = () => {
  return (
    <div className='service_container'>
      <div className="heading"><h1>Service</h1></div>
        <div className="service_sec">
          <div className="service_list">
            <div className="icon"><h2><CloudCircleIcon className='Icon' sx={{ fontSize: 60 }}/></h2></div>
            <div className="head"><h3>Web Application</h3></div>
            <div className="summaries"><p>I develop professional websites, blogs, portfolios, landing pages and e-commerces.</p></div>
        </div>
        <div className="service_list">
            <div className="icon"><CodeIcon className='Icon' sx={{ fontSize: 60 }}/></div>
            <div className="head"><h3>Clean Code</h3></div>
            <div className="summaries"><p>Prioritize during development, clean code following the best practices in the market.</p></div>
        </div>
        <div className="service_list">
            <div className="icon"><DeveloperModeIcon className='Icon' sx={{ fontSize: 60 }}/></div>
            <div className="head"><h3>High-Fidelity Interfaces</h3></div>
            <div className="summaries"><p>I try to ensure that the graphics meet the requirements pre-defined by the customer.</p></div>
        </div>
        <div className="service_list">
            <div className="icon"><ScreenshotMonitorIcon className='Icon' sx={{ fontSize: 60 }}/></div>
            <div className="head"><h3>Responsive Web Pages</h3></div>
            <div className="summaries"><p>Work harmonizing the structure of the page, balancing visual elements, on different devices.</p></div>
        </div>
        <div className="service_list">
            <div className="icon"><SearchIcon className='Icon' sx={{ fontSize: 60 }}/></div>
            <div className="head"><h3>SEO</h3></div>
            <div className="summaries"><p>I use code with sets of techniques that improve the positioning in search engines.</p></div>
        </div>
        <div className="service_list">
            <div className="icon"><AnimationIcon className='Icon' sx={{ fontSize: 60 }}/></div>
            <div className="head"><h3>Animation</h3></div>
            <div className="summaries"><p>I produce interactions that catch the user's attention, conveying a sense of modernity.</p></div>
        </div>
      </div>
    </div>
  )
}

export default Services