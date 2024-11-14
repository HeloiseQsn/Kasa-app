import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ cardData }) {
  return (
    <Link to={`/accomodation/${cardData.id}`} className="card-link">
      <article className="card">
        <img src={cardData.cover} alt={cardData.title} />
        <div className="card-title">{cardData.title}</div>
      </article>
    </Link>
  )
}

export default Card
