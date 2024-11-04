import './Footer.scss'
import LogoFooter from '../../assets/logo_footer.png'

function Footer() {
  return (
    <footer>
      <div className="LogoContainer">
        <img src={LogoFooter} alt="Logo blanc" />
      </div>
      <div className="FooterText">
        <p>@2020 Kasa.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
