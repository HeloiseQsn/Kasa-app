import React, { useState, useCallback } from 'react'
import './carrousel.scss'
import rightArrow from '../../assets/chevron_carousel_right.svg'
import leftArrow from '../../assets/chevron_carousel_left.svg'

function Carrousel({ id, accommodation }) {
  // currentIndex = index de l'image courante, setCurrentIndex = fonction pour mettre à jour currentIndex, initialisé à 0
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fonction pour aller à l'image précédente, mémorisée avec useCallback
  const prevPhoto = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      // Si l'index est 0, on revient à la dernière image, sinon on décrémente l'index
      prevIndex === 0 ? accommodation.pictures.length - 1 : prevIndex - 1,
    )
  }, [accommodation])

  // Fonction pour aller à l'image suivante, mémorisée avec useCallback
  const nextPhoto = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      // Si l'index est le dernier, on revient à la première image, sinon on incrémente l'index
      prevIndex === accommodation.pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }, [accommodation])

  return (
    <div className="carrousel">
      {/* Affichage du bouton pour aller à l'image précédente si le nombre d'images est supérieur à 1 */}
      {accommodation.pictures.length > 1 && (
        <button
          className="carrousel__button carrousel__button--left"
          onClick={prevPhoto}
        >
          <img src={leftArrow} alt="flèche précédente" />
        </button>
      )}
      <div className="carrousel__images">
        {accommodation.pictures.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Img ${index + 1}`}
            className={`carrousel__image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      {/* Affichage du numéro de l'image courante sur le total si le nombre d'images est supérieur à 1 */}
      {accommodation.pictures.length > 1 && (
        <div className="carrousel__numslide">{`${currentIndex + 1}/${accommodation.pictures.length}`}</div>
      )}
      {/* Affichage du bouton pour aller à l'image suivante si le nombre d'images est supérieur à 1 */}
      {accommodation.pictures.length > 1 && (
        <button
          className="carrousel__button carrousel__button--right"
          onClick={nextPhoto}
        >
          <img src={rightArrow} alt="flèche suivante" />
        </button>
      )}
    </div>
  )
}

export default Carrousel
