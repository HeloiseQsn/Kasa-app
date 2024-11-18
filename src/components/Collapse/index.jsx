import React, { useState, useRef } from 'react'
import './collapse.scss'
import ArrowOpen from '../../assets/arrow_collapse_open.svg'
import ArrowClose from '../../assets/arrow_collapse_close.svg'

function Collapse({ title, text, items, isText, isFullWidth }) {
  //useState pour savoir si le collapse est ouvert ou fermé. Il est fermé par défaut
  const [open, setOpen] = useState(false)

  const contentRef = useRef(null)

  // Fonction pour ouvrir et fermer
  const toggleCollapse = () => setOpen((prevOpen) => !prevOpen)

  return (
    // class conditionnelle fullWidth en fonction de la props pour gestion de la largeur du collapse
    <div className={`collapse ${isFullWidth ? 'fullWidth' : ''}`}>
      {/* Bouton pour gérer l'affichage ou non du contenu */}
      <button>
        <span>{title}</span>
        <img
          onClick={toggleCollapse}
          src={open ? ArrowClose : ArrowOpen}
          alt="Toggle arrow"
          className={`collapse__arrow ${open ? 'open' : ''}`}
        />
      </button>
      {/* Contenu du collapse avec animation de hauteur */}
      <div
        className="collapse__content"
        ref={contentRef}
        style={{
          // Hauteur maximale conditionnelle selon l'état ouvert/fermé
          maxHeight: open ? contentRef.current.scrollHeight : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-out',
        }}
      >
        {/* Si le contenu est du text = <p></p> sinon, liste ul avec les équipements*/}
        {isText ? (
          <p>{text}</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Collapse
