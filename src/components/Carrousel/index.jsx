import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Carrousel.scss'
import rightArrow from '../../assets/chevron_carousel_right.svg'
import leftArrow from '../../assets/chevron_carousel_left.svg' // Ajoutez l'importation de l'image de la flèche gauche
import data from '../../datas/dataaccomodation.json'
import Error from '../../pages/error'

function Carrousel() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const [accommodation, setAccommodation] = useState(null) // État pour stocker les données du logement
  const [currentIndex, setCurrentIndex] = useState(0) // currentIndex=index de l'image courante, setCurrentIndex = fonction pour mettre à jour le currentIndex et useSate initialise l'index à 0

  useEffect(() => {
    // Filtre les données pour récupérer l'hébergement correspondant à l'ID dans l'URL
    const accommodationData = data.find((item) => item.id === id)
    setAccommodation(accommodationData) // Mets à jour l'état avec les données de l'hébergement
  }, [id])

  if (!accommodation) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  const prevPhoto = () => {
    setCurrentIndex(
      (prevIndex) =>
        prevIndex === 0 ? accommodation.pictures.length - 1 : prevIndex - 1, //si l'index=0, l'index suivant est le nbre total d'img -1 pour revenir à l'img préc, sinon index - 1
    )
  }

  const nextPhoto = () => {
    setCurrentIndex(
      (prevIndex) =>
        prevIndex === accommodation.pictures.length - 1 ? 0 : prevIndex + 1, //si l'index est le dernier du tableau, on revient à l'index 0, sinon index + 1
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
        {accommodation.pictures.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Img ${index + 1}`}
            className={`carrousel__image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="carroussel__numslide">{`${currentIndex + 1}/${accommodation.pictures.length}`}</div>{' '}
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
