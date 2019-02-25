import React from 'react'
import Item from './Item'

const GroceryList = ({items, todoClick, deleteItem, toggleEdit}) => (
  <div className="list">
    <ul>
      { items.map(item =>
          <Item 
            key={item.id}
            {...item}
            todoClick={todoClick}
            deleteItem={deleteItem}
            toggleEdit={toggleEdit}
          />
        )
      }
    </ul>
  </div>
)

export default GroceryList