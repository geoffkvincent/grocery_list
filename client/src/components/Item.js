import React from 'react'

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

const Item = ({name, id, complete, todoClick}) => (
  <li
    style={ complete ? {...styles.item, ...styles.complete } : styles.item }
    onClick={() => todoClick(id)}
    className="list-items"
  >
    {name}
    <div className="delete">
      <h4>X</h4> 
    </div>
  </li>
)

export default Item