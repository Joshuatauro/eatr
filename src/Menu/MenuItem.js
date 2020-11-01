import React from 'react'

const MenuItem = (props) => {
  const {img, alt , title , price} = props.props
  return (
    <div className="card-item">
      <div className="card-item-inner">
        <img src={img} alt={alt}/>
        <h1>{title}</h1>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default MenuItem
