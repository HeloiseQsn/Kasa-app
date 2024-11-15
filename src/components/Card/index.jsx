import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ cardData }) {
  return (
    <Link to={`/accommodation/${cardData.id}`} className="card">
      <article className="card__article">
        <img src={cardData.cover} alt={cardData.title} />
        <div className="card__article--title">{cardData.title}</div>
      </article>
    </Link>
  )
}

export default Card
