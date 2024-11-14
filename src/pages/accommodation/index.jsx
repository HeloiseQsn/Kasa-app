import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import data from '../../datas/dataaccommodation.json'
import './accommodation.scss'
import '../../styles/main.scss'

function Accommodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const navigate = useNavigate()

  // Utilisez une expression régulière pour valider l'ID
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
    return null // Vous pouvez aussi afficher un spinner ou un message temporaire ici
  }

  return (
    <main className="Accommodation">
      <Carrousel id={id} accommodation={accommodation} />

      <div className="title_host_rating_container">
        <div className="title_tag_bloc">
          <div className="title_Container">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
          </div>
          <div className="tag_Container">
            {accommodation.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div className="host_rating_bloc">
          <Host accommodation={accommodation} />
          <div className="rating">
            <Rating rating={accommodation.rating} />
          </div>
        </div>
      </div>

      <div className="collapse_container">
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
