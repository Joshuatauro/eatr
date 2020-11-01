import React from 'react'

const ReviewItem = (props) => {
  const {img, alt, name, desc} = props.props
  return (
    <div className="review-card">
      <div className="review-card-inner">
        <img src={img} alt={alt}/>
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p>{desc}</p>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default ReviewItem
