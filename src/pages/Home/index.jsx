import './home.scss'
import '../../styles/main.scss'
import Gallery from '../../components/Gallery'
import Banner from '../../components/Banner'
import ImgBanner from '../../assets/img_banner_home_desktop.webp'
import ImgBannerMobile from '../../assets/img_banner_home_mobile.webp'

function Home() {
  const text = 'Chez vous, partout et ailleurs'
  const textMobile = 'Chez vous, partout et ailleurs'

  return (
    <main className="home">
      <Banner
        imageSrc={ImgBanner}
        ImgBannerMobile={ImgBannerMobile}
        text={text}
        textMobile={textMobile}
        backgroundOpacity={0.6}
      />
      <Gallery />
    </main>
  )
}

export default Home
