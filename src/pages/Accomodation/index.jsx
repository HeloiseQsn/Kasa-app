import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import data from '../../datas/dataaccomodation.json'
import './accomodation.scss'
import '../../styles/main.scss'

function Accomodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const navigate = useNavigate()

  // Utilisez une expression régulière pour valider l'ID
  const isValidId = /^[a-zA-Z0-9]+$/.test(id)
  const accomodation = useMemo(
    () => (isValidId ? data.find((item) => item.id === id) : null),
    [id],
  )

  useEffect(() => {
    if (!isValidId || !accomodation) {
      navigate('/error', { replace: true })
    }
  }, [isValidId, accomodation, navigate])

  if (!accomodation) {
    return null // Vous pouvez aussi afficher un spinner ou un message temporaire ici
  }

  return (
    <main className="Accomodation">
      <Carrousel id={id} accomodation={accomodation} />

      <div className="title_host_rating_container">
        <div className="title_tag_bloc">
          <div className="title_Container">
            <h1>{accomodation.title}</h1>
            <p>{accomodation.location}</p>
          </div>
          <div className="tag_Container">
            {accomodation.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div className="host_rating_bloc">
          <Host accomodation={accomodation} />
          <div className="rating">
            <Rating rating={accomodation.rating} />
          </div>
        </div>
      </div>

      <div className="collapse_container">
        <Collapse
          title="Description"
          isText={true}
          isFullWidth={false}
          text={accomodation.description}
        />
        <Collapse
          title="Equipements"
          isText={false}
          isFullWidth={false}
          items={accomodation.equipments}
        />
      </div>
    </main>
  )
}

export default Accomodation
