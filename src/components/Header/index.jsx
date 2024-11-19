import './header.scss'
import { NavLink } from 'react-router-dom'
import Logodesktop from '../../assets/logo_desktop.png'
import Logomobile from '../../assets/logo_mobile.png'

function Header() {
  return (
    <header>
      <picture>
        <source srcSet={Logodesktop} media="(min-width: 831px)" sizes="422px" />
        <source srcSet={Logomobile} media="(max-width: 830px)" sizes="146px" />
        <img src={Logodesktop} alt="Logo rouge" />
      </picture>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
