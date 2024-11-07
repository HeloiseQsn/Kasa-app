import './home.scss'
import '../../styles/main.scss'
import Gallery from '../../components/Gallery'
import Banner from '../../components/Banner'
import ImgBanner from '../../assets/img_banner_home_desktop.png'

function Home() {
  return (
    <main>
      <Banner imageSrc={ImgBanner} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  )
}

export default Home
