import './Host.scss'

function Host({ accommodation }) {
  const [firstName, lastName] = accommodation.host.name.split(' ')

  return (
    <div className="host__container">
      <p>
        <span>{firstName}</span>
        <br />
        <span>{lastName}</span>
      </p>
      <img
        src={accommodation.host.picture}
        alt={`Profil ${accommodation.host.name}`}
      />
    </div>
  )
}

export default Host
