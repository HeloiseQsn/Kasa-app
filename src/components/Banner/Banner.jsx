import './Banner.scss'

function Banner({ imageSrc, text }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner" />
      <div className="title_container">{text && <h1>{text}</h1>}</div>
    </div>
  )
}

export default Banner
