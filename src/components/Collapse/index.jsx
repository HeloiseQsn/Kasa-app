import React, { useState, useRef } from 'react'
import ArrowOpen from '../../assets/arrow_collapse_open.svg'
import ArrowClose from '../../assets/arrow_collapse_close.svg'

function Collapse({ title, text, items, isText }) {
  const [open, setOpen] = useState(false) //useState false pour indiquer la liste est fermée par défaut
  const contentRef = useRef(null)

  const toggleCollapse = () => setOpen((prevOpen) => !prevOpen) // pour gérer l'ouverture et la fermeture de la liste

  return (
    <div>
      <button onClick={toggleCollapse}>
        <span>{title}</span>
        <img src={open ? ArrowOpen : ArrowClose} alt="Toggle arrow" />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current.scrollHeight : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-out',
        }}
      >
        {isText ? (
          <p>{text}</p>
        ) : (
          <ul>
            {items && items.length > 0 ? (
              items.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>"Pas de description"</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Collapse
