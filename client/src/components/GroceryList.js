import React from 'react'


const GroceryList = ({items, todoClick}) => (
  <div className="list">
    <ul>
      { items.map(item =>
          <Item 
          key={item.id}
          {...item}
          todoClick={todoClick}
          />
        )
      }
    </ul>
  </div>
)

export default GroceryList