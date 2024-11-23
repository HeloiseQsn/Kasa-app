import React from 'react'
import './Rating.scss'
import EmptyStar from '../../assets/inactive_star.svg'
import FullStar from '../../assets/active_star.svg'

function Rating({ rating }) {
  // Calcul du pourcentage d'étoiles pleines à afficher en fonction de la note sur 5 de la BDD
  const starPercentage = (rating / 5) * 100

  return (
    <div className="rating">
      <div className="rating__emptyStars">
        {/* Création d'un tableau de 5 éléments pour les étoiles vides */}
        {[...Array(5)].map((_, index) => (
          <img key={index} src={EmptyStar} alt="Étoile vide" />
        ))}
      </div>
      <div
        className="rating__fullStars"
        style={{ width: `${starPercentage}%` }} // la largeur du conteneur d'étoiles pleines = pourcentage rating calculé
      >
        {[...Array(5)].map((_, index) => (
          <img key={index} src={FullStar} alt="Étoile pleine" />
        ))}
      </div>
    </div>
  )
}

export default Rating
