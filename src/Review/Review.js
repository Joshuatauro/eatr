import React from 'react'
import ReviewItem from './ReviewItem'

import './Review.css'

const Review = () => {
  const reviews = [
    {img:'images/review-2.jpg', alt:'picture' , name: '-Malcolm Function' , desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur nunc ac magna facilisis pellentesque. Nunc ligula lorem, ultricies quis dictum sit amet, feugiat ut diam. Ut facilisis luctus laoreet. In eget justo sit amet ex ullamcorper maximus. In hac habitasse platea'},
    {img:'images/review-1.jpg', alt:'picture' , name: '-Hilary Ouse' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur nunc ac magna facilisis pellentesque. Nunc ligula lorem, ultricies quis dictum sit amet, feugiat ut diam. Ut facilisis lu lorem ipsum laoreet maximum in eget justo sit amet ex ullamcorper maximus in hax habite'},
    {img:'images/review-3.jpg', alt:'picture' , name:'-Pelican Steve' , desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur nunc ac magna facilisis pellentesque. Nunc ligula lorem, ultricies quis dictum sit amet, feugiat ut diam. Ut facilisis luctus laoreet. In eget justo sit amet ex ullamcorper lorem ipsun maximus. in hac habitase'}
  ]

  return (
    <div className="review" id="review">
      <div className="review-container">
        <div className="review-content">
          <h1><span className="red review">R</span>eviews</h1>
          <p>These are some of the few comments that our past customers have to say about us</p>
        </div>
      <div className="review-card-container">
        {reviews.map((review)=>{
          return(
            <ReviewItem props={review} />
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default Review
