import React , { useState } from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {
  const [open , isOpen] = useState(false)

  const handleNav = () => {
    isOpen(!open)
  }

  const [nav , isNav] = useState(false)

  
  const changeBg = () => {
    if(window.scrollY > 90){
      isNav(true)
    }
    else{
      isNav(false)
    }
  }

  const closeNav = () => {
    isOpen(false)
  }

  window.addEventListener('scroll' , changeBg)



  return (
    <div className={nav ? "navbar white" : "navbar"}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="hero"  smooth={true} duration={1500} onClick={closeNav}>
            <h1>Eatr<span className="red">.</span></h1>
          </Link>
        </div>
          <div className={open ? "nav-burger open" : "nav-burger"} onClick={handleNav}>
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </div>

          <ul className={open ? "navlinks open" : "navlinks close"}>
            <Link to="about"  smooth={true} duration={1500} onClick={closeNav}>
              <li className="nav-item"><span className="red">A</span>bout</li>
            </Link>
            <Link to="menu"  smooth={true} duration={1500} onClick={closeNav}>
            <li className="nav-item"><span className="red">M</span>enu</li>
            </Link>
            <Link to="team"  smooth={true} duration={1500} onClick={closeNav}>
              <li className="nav-item"><span className="red">T</span>eam</li>
            </Link>
            <Link to="review"  smooth={true} duration={1500} onClick={closeNav}>
              <li className="nav-item"><span className="red">R</span>eviews</li>
            </Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
