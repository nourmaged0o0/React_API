import React, { useState } from 'react'
import "./Nav.css"
import Logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  
  return (
    <>
      <div className="mainNav">
        <a href="https://180daraga.com/"><img src={Logo} alt="" /></a>
        
        <div className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        
        <ul className={showMenu ? "mobile-menu active" : "mobile-menu"}>
          <a href="https://180daraga.com/"><li>Home</li></a>
          <a href="https://180daraga.com/event"><li>Event</li></a>
          <a href="https://180daraga.com/team"><li>Team Hierarchy</li></a>
          <a href="https://180daraga.com/blogs"><li>Blogs</li></a>
        </ul>
      </div>
    </>
  )
}

export default Nav