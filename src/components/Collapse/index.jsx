import React, { useState, useRef } from 'react'
import './Collapse.scss'
import ArrowOpen from '../../assets/arrow_collapse_open.svg'
import ArrowClose from '../../assets/arrow_collapse_close.svg'

function Collapse({ title, text, items, isText, isFullWidth }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  const toggleCollapse = () => setOpen((prevOpen) => !prevOpen)

  return (
    <div className={`collapse ${isFullWidth ? 'fullWidth' : ''}`}>
      <button onClick={toggleCollapse}>
        <span>{title}</span>
        <img src={open ? ArrowClose : ArrowOpen} alt="Toggle arrow" />
      </button>
      <div
        className="collapse_content"
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
