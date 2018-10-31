import React from 'react'
import Item from './Item'

const GroceryList = ({items}) => (
  <div>
    <ul>
      { items.map(item =>
          <Item 
          key={item.id}
          {...item}
          />
        )
      }
    </ul>
  </div>
)

export default GroceryList