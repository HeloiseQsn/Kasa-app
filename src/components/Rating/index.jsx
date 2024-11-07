import React from 'react'
import './rating.scss'
import EmptyStar from '../../assets/inactive_star.svg'
import FullStar from '../../assets/active_star.svg'

function Rating({ rating }) {
  const starPercentage = (rating / 5) * 100

  return (
    <div className="star-rating">
      <div className="stars-empty">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={EmptyStar} alt="Étoile vide" />
        ))}
      </div>
      <div className="stars-full" style={{ width: `${starPercentage}%` }}>
        {[...Array(5)].map((_, index) => (
          <img key={index} src={FullStar} alt="Étoile pleine" />
        ))}
      </div>
    </div>
  )
}

export default Rating
