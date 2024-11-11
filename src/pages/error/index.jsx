import './error.scss'
import '../../styles/main.scss'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <main className="Error">
      <div className="error404">404</div>
      <div className="oups">
        Oups ! La page que vous demandez n'existe pas.{' '}
      </div>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  )
}

export default Error
