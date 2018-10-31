import React from 'react'

const styles = {
  item: {cursor: 'pointer'}
}

const Item = ({name}) => (
  <li
    style={styles.item}
    onClick=
  >
    {name}
  </li>
)

export default Item