import './Host.scss'

function Host({ accomodation }) {
  const [firstName, lastName] = accomodation.host.name.split(' ')

  return (
    <div className="host_container">
      <p>
        <span>{firstName}</span>
        <br />
        <span>{lastName}</span>
      </p>
      <img
        className="host_picture"
        src={accomodation.host.picture}
        alt={`Profil ${accomodation.host.name}`}
      />
    </div>
  )
}

export default Host
