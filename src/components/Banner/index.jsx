import React from 'react'
import './banner.scss'

function Banner({ imageSrc, text, backgroundOpacity }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      {/*Insertion text uniquement s'il est défini*/}
      {text && <h1 className="banner__text">{text}</h1>}
      {/*overlay pour appliquer le filtre noir d'opacité variable sur la banner - gestion de l'opacité via la props backgroundOpacity*/}
      <div
        className="banner__overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      ></div>
    </div>
  )
}

export default Banner
