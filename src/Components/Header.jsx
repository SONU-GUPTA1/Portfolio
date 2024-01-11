import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const Header = () => {

  const[showMenu, setShowMenu] = useState(false);
  const toggleMenu =()=>{
    setShowMenu(!showMenu);
  }

  return (
    <div className='container'>
        <span className='toggle_btn' onClick={toggleMenu}><MenuIcon/></span>
        <nav className={showMenu ? 'show ' : ''}>
            <ul  >
                <li className='nav-item' ><NavLink className='li-item'  to={"/"} onClick={toggleMenu} ><HomeIcon/>Home</NavLink></li>
                <li className='nav-item' ><NavLink className='li-item' to={"/about"} onClick={toggleMenu}  ><PersonIcon/>About Me</NavLink></li>
                <li className='nav-item'><NavLink className='li-item' to={"/service"} onClick={toggleMenu} ><ListIcon/>Services</NavLink></li>
                <li className='nav-item'><NavLink className='li-item' to={"/project"} onClick={toggleMenu} ><HomeRepairServiceIcon/>Projects</NavLink></li>
                <li className='nav-item'><NavLink className='li-item' to={"/contact"} onClick={toggleMenu} ><ContactsIcon/>Contact</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header