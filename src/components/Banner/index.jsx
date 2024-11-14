import React from 'react'
import './Banner.scss'

function Banner({ imageSrc, text, backgroundOpacity }) {
  const modifiedText = text ? text.replace(/,/g, ',\n') : ''

  return (
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      {text && (
        <h1 className="banner__text" data-text={modifiedText}>
          {text}
        </h1>
      )}
      <div
        className="banner__overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      ></div>
    </div>
  )
}

export default Banner
