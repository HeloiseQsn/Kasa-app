import './Banner.scss'

function Banner({ imageSrc, text }) {
  const [firstPart, secondPart] = text ? text.split(', ') : ['', '']

  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner" />
      <div className="title_container">
        {text ? (
          <h1>
            <span className="banner-text-first">{firstPart}, </span>
            {secondPart && (
              <span className="banner-text-second">{secondPart}</span>
            )}
          </h1>
        ) : null}
      </div>
    </div>
  )
}

export default Banner
