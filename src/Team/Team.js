import React from 'react'
import TeamMember from './TeamMember'

import './Team.css'

const Team = () => {
  const details = [
    {img: 'images/team-1.jpg' , alt:'team' , name:'Freck Nerd' , desc:'Executive chef'},
    {img: 'images/team-2.jpg', alt:'team' , name:'Lorem Ipsum', desc:'Head chef'},
    {img: 'images/team-3.jpg' , alt: 'team' , name:'Jane Doe' , desc:'Junior Chef'},
    {img: 'images/team-4.jpg' , alt: 'team' , name:'Penny Tool' , desc:'Barista'}
  ]
  return (
    <div className="team" id="team">
      <div className="team-container">
        <div className="team-content">
          <h1><span className="red team">O</span>ur <span className="red team">T</span>eam</h1>
          <p>Our skilled staff that is responsible for creating foods that'd you'd want to never stop eating</p>
        </div>
        <div className="team-card-container">
          {details.map((props) => {
            return(
              <TeamMember props={props} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Team
