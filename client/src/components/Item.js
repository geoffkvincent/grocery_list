import React from 'react'

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

const Item = ({name, id, complete, todoClick, deleteItem, updateItem}) => (
  <div style={{width: '500px'}}>
    <li
      style={ complete ? {...styles.item, ...styles.complete } : styles.item }
      onClick={() => todoClick(id)}
      className="list-items"
    >
      {name} 
    <div>
      <a onClick={() => deleteItem(id)} class="waves-effect waves-light btn">Delete</a>
      <a onClick={() => updateItem(id)} class="waves-effect waves-light btn">Edit</a>
    </div>
    </li>
  </div>
)

export default Item