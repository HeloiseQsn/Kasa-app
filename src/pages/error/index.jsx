import './Error.scss'
import '../../styles/main.scss'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <main className="error">
      <div className="error__num">404</div>
      <div className="error__text">
        Oups ! La page que vous demandez n'existe pas.{' '}
      </div>
      <NavLink className="error__homeLink" to="/">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  )
}

export default Error
