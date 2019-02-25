import React from 'react'

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

const Item = ({name, id, complete, todoClick, deleteItem, toggleEdit}) => (
  <div style={{width: '500px'}}>
    <li
      style={ complete ? {...styles.item, ...styles.complete } : styles.item }
      onClick={() => todoClick(id)}
      className="list-items"
    >
      {name} 
    </li>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <a 
        onClick={() => deleteItem(id)} 
        class="waves-effect red lighten-1 btn-small"
      >
        Delete
      </a>
      <a 
        onClick={() => toggleEdit(id)} 
        class="waves-effect purple lighten-1 btn-small"
      >
        Edit
      </a>
    </div>
  </div>
)

export default Item