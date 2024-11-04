import React, { useState } from 'react'
import './Carrousel.scss'
import Card from '../Card/'
import data from '../../datas/dataaccomodation.json'

function Carrousel() {
  const [startIndex, setStartIndex] = useState(0)
  const cardsPerPage = 6

  const handleNext = () => {
    if (startIndex + cardsPerPage < data.length) {
      setStartIndex(startIndex + cardsPerPage)
    }
  }

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage)
    }
  }
  return (
    <div className="carrousel-container">
      <button
        className="prevButton"
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        &lt;
      </button>
      <div className="carrousel">
        {data
          .slice(startIndex, startIndex + cardsPerPage)
          .map((accommodation) => (
            <Card key={accommodation.id} id={accommodation.id} />
          ))}
      </div>
      <button
        className="nextButton"
        onClick={handleNext}
        disabled={startIndex + cardsPerPage >= data.length}
      >
        &gt;
      </button>
    </div>
  )
}

export default Carrousel
