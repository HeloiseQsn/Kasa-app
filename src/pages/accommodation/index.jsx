import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carrousel from '../../components/carrousel'
import Rating from '../../components/rating'
import Collapse from '../../components/collapse'
import Tag from '../../components/tag'
import Host from '../../components/host'
import data from '../../datas/dataaccommodation.json'
import './accommodation.scss'
import '../../styles/main.scss'

function Accommodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const navigate = useNavigate()

  // vérification de la validité de l'ID du logement
  const isValidId = /^[a-zA-Z0-9]+$/.test(id)
  const accommodation = useMemo(
    () => (isValidId ? data.find((item) => item.id === id) : null),
    [id],
  )

  useEffect(() => {
    if (!isValidId || !accommodation) {
      navigate('/error', { replace: true })
    }
  }, [isValidId, accommodation, navigate])

  if (!accommodation) {
    return null
  }

  return (
    <main className="accommodation">
      <Carrousel id={id} accommodation={accommodation} />

      <div className="accommodation__infoBloc">
        <div className="accommodation__infoBloc--titleTagBloc">
          <div className="accommodation__infoBloc--titleTagBloc--titleContainer">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
          </div>
          <div className="accommodation__infoBloc--titleTagBloc--tagContainer">
            {accommodation.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div className="accommodation__infoBloc--hostRatingBloc">
          <Host accommodation={accommodation} />
          <div>
            <Rating rating={accommodation.rating} />
          </div>
        </div>
      </div>

      <div className="accommodation__collapseBloc">
        <Collapse
          title="Description"
          isText={true}
          isFullWidth={false}
          text={accommodation.description}
        />
        <Collapse
          title="Equipements"
          isText={false}
          isFullWidth={false}
          items={accommodation.equipments}
        />
      </div>
    </main>
  )
}

export default Accommodation
