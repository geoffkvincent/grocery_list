import React from 'react'
import Item from './Item'

const GroceryList = ({items, todoClick, deleteItem, updateItem}) => (
  <div className="list">
    <ul>
      { items.map(item =>
          <Item 
            key={item.id}
            {...item}
            todoClick={todoClick}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
          )
        }
    </ul>
  </div>
)

export default GroceryList