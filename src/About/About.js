import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h1><span className="red about">A</span>bout Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur, exercitationem incidunt laudantium iure laboriosam quibusdam cum mollitia illo harum impedit est quaerat, facere asperiores. Rem labore ullam ab voluptatibus!</p>
        </div>
        <div className="about-image">
          <img src="images/about.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About
