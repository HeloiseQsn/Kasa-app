import React from 'react'
import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'

function Accomodation() {
  const { id } = useParams() // Récupère l'ID de l'URL
  return (
    <div>
      <Carrousel id={id} />
    </div>
  )
}

export default Accomodation
