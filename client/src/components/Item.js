import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Item = ({ id, complete, name, updateItem, deleteItem }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        <div htmlFor={`item-${id}`}>{name}</div>
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateItem(id)}
      />
      
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteItem(id)}>
      X
    </div>
  </div>
)

export default Item;