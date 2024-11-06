import React, { useMemo } from 'react'
import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import data from '../../datas/dataaccomodation.json'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'

function Accomodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  const accomodation = useMemo(() => data.find((item) => item.id === id), [id])

  return (
    <main>
      <Carrousel id={id} accomodation={accomodation} />
      <h1>{accomodation.title}</h1>
      <h2>{accomodation.location}</h2>
      <p>{accomodation.host.name}</p>
      <img
        src={accomodation.host.picture}
        alt={`Profil ${accomodation.host.name}`}
      />
      <Rating />
      <div>
        {accomodation.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <Collapse
        title="Description"
        isText={true}
        text={accomodation.description}
      />
      <Collapse
        title="Equipements"
        isText={false}
        items={accomodation.equipments}
      />
    </main>
  )
}

export default Accomodation
