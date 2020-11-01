import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

const Hero = () => {
  const [done, isDone] = useState(false)

  const finish = () => {
    isDone(true)
  }

  const hello = () => setTimeout(finish , 3000)

  return (
    <>
    <div className={done ? "preloader finish" : "preloader"} onLoad={hello()}>
      <i class="fas fa-utensils"></i>
      <h1>Preparing your table</h1>
    </div>
    <div className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Best in <span className="red hero">town</span></h1>
          <p>Come taste the best food in town and treat yourself to mouth watering dishes</p>
          <Link to="menu"  smooth={true} duration={1500}>
            <button>Menu!</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
