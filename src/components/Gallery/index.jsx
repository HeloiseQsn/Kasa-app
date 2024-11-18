import React from 'react'
import './gallery.scss'
import Card from '../card'
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
