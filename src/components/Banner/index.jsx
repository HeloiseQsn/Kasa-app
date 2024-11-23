import React from 'react'
import './Banner.scss'

function Banner({
  imageSrc,
  mobileImageSrc,
  text,
  textMobile,
  backgroundOpacity,
}) {
  const [firstPart, secondPart] = textMobile.split(', ')

  return (
    <div className="banner">
      {/* Image responsive avec srcset */}
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileImageSrc} />
        <img
          className="banner__image"
          src={imageSrc}
          alt="Banner"
          srcSet={`${imageSrc}`}
        />
      </picture>

      {/* Insertion du texte uniquement s'il est défini */}
      {text && <h1 className="banner__text banner__text--desktop">{text}</h1>}
      {textMobile && (
        <h1 className="banner__text banner__text--mobile">
          <span>{firstPart},</span>
          <span>{secondPart}</span>
        </h1>
      )}

      {/* Overlay pour appliquer un filtre noir d'opacité variable sur la bannière */}
      <div
        className="banner__overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      ></div>
    </div>
  )
}

export default Banner
