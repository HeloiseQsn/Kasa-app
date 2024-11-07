import React, { useMemo } from 'react'
import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import './accomodation.scss'
import '../../styles/main.scss'
import data from '../../datas/dataaccomodation.json'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Host from '../../components/Host'

function Accomodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const accomodation = useMemo(() => data.find((item) => item.id === id), [id])

  return (
    <main>
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
