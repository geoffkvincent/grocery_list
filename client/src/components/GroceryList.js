import React from 'react'

const GroceryList = ({items}) => (
  <div>
    <ul>
      { items.map(item =>
          <li key={item.id}>
            {item.name}
          </li>
        )
      }
    </ul>
  </div>
)

export default GroceryList