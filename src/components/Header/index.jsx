import './Header.scss'
import { NavLink } from 'react-router-dom'
import Logodesktop from '../../assets/logo_desktop.png'
import Logomobile from '../../assets/logo_mobile.png'

function Header({ activePage }) {
  return (
    <header>
      <picture>
        <source srcSet={Logodesktop} media="(min-width: 601px)" sizes="422px" />
        <source srcSet={Logomobile} media="(max-width: 600px)" sizes="146px" />
        <img src={Logodesktop} alt="Logo rouge" />
      </picture>
      <nav>
        <ul>
          <NavLink className={activePage ? 'activePage' : ''} to="/">
            Accueil
          </NavLink>
          <NavLink to="/about">A propos</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
