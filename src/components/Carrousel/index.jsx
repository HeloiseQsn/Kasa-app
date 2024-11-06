import React, { useState, useMemo, useCallback } from 'react'
import './Carrousel.scss'
import rightArrow from '../../assets/chevron_carousel_right.svg'
import leftArrow from '../../assets/chevron_carousel_left.svg'
import Error from '../../pages/error'

function Carrousel({ id, accomodation }) {
  const [currentIndex, setCurrentIndex] = useState(0) // currentIndex=index de l'image courante, setCurrentIndex = fonction pour mettre à jour le currentIndex et useSate initialise l'index à 0

  const prevPhoto = useCallback(() => {
    if (!accomodation) return
    setCurrentIndex(
      (prevIndex) =>
        prevIndex === 0 ? accomodation.pictures.length - 1 : prevIndex - 1, //si l'index=0, l'index suivant est le nbre total d'img -1 pour revenir à l'img préc, sinon index - 1
    )
  }, [accomodation])

  const nextPhoto = useCallback(() => {
    if (!accomodation) return
    setCurrentIndex(
      (prevIndex) =>
        prevIndex === accomodation.pictures.length - 1 ? 0 : prevIndex + 1, //si l'index est le dernier du tableau, on revient à l'index 0, sinon index + 1
    )
  }, [accomodation])

  if (!accomodation) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  return (
    <div className="carrousel">
      <button
        className="carrousel__button carrousel__button--left"
        onClick={prevPhoto}
      >
        <img src={leftArrow} alt="flèche précédente" />
      </button>
      <div className="carrousel__images">
        {accomodation.pictures.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Img ${index + 1}`}
            className={`carrousel__image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="carroussel__numslide">{`${currentIndex + 1}/${accomodation.pictures.length}`}</div>{' '}
      <button
        className="carrousel__button carrousel__button--right"
        onClick={nextPhoto}
      >
        <img src={rightArrow} alt="flèche suivante" />
      </button>
    </div>
  )
}

export default Carrousel
