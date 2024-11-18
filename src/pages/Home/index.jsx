import './home.scss'
import '../../styles/main.scss'
import Gallery from '../../components/gallery'
import Banner from '../../components/banner'
import ImgBanner from '../../assets/img_banner_home_desktop.webp'

function Home() {
  return (
    <main className="home">
      <Banner
        imageSrc={ImgBanner}
        text="Chez vous, partout et ailleurs"
        backgroundOpacity={0.6}
      />
      <Gallery />
    </main>
  )
}

export default Home
