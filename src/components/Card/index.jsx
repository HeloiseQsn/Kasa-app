import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import data from '../../datas/dataaccomodation.json'

function Card({ id }) {
  const cardData = data.find((card) => card.id === id)
  return (
    <Link to={`/accomodation/${id}`} className="card-link">
      <article className="card">
        <img src={cardData.cover} alt={cardData.title} />
        <div className="cardTitle">{cardData.title}</div>
      </article>
    </Link>
  )
}

export default Card

//Ajouter Link sur article to page de l'accomodation
