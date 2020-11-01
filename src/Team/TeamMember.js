import React from 'react'

const TeamMember = (props) => {
  const {img, alt, name, desc} = props.props
  return (
    <div className="team-card">
      <div className="team-card-inner">
        <img src={img} alt={alt}/>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default TeamMember
