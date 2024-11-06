import './about.scss'
import Banner from '../../components/Banner'
import ImgBanner from '../../assets/img_banner_about_desktop.png'

function About() {
  return (
    <div>
      <main>
        <Banner imageSrc={ImgBanner} />
        <div>Page about</div>
      </main>
    </div>
  )
}

export default About
