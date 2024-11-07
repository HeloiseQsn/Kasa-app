import './Tag.scss'

function Tag({ tag }) {
  return (
    <div className="tag">
      <div className="tag_text">{tag}</div>
    </div>
  )
}

export default Tag
