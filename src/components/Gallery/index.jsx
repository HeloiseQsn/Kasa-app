import React from 'react'
import './Gallery.scss'
import Card from '../Card'
import data from '../../datas/dataaccomodation.json'

function Gallery() {
  return (
    <div className="gallery">
      {data.map((accommodation) => (
        <Card key={accommodation.id} id={accommodation.id} />
      ))}
    </div>
  )
}

export default Gallery
