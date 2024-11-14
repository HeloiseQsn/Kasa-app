import React from 'react'
import './Gallery.scss'
import Card from '../Card'
import data from '../../datas/dataaccommodation.json'

function Gallery() {
  return (
    <div className="gallery">
      {data.map((accommodation) => (
        <Card cardData={accommodation} key={accommodation.id} />
      ))}
    </div>
  )
}

export default Gallery
