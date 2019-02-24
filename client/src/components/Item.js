import React from 'react'

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

const Item = ({name, id, complete, todoClick, deleteItem}) => (
  <div style={{width: '500px'}}>
    <li
      style={ complete ? {...styles.item, ...styles.complete } : styles.item }
      onClick={() => todoClick(id)}
      className="list-items"
    >
      {name} 
    <div>
      <a onClick={deleteItem} class="waves-effect waves-light btn">Delete</a>
    </div>
    </li>
  </div>
)

export default Item