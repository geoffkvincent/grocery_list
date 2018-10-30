import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state= {items: []}
  
  componentDidMount() {
    axios.get('/api/items')
      .then( ({data: items}) => this.setState({items}))
  }

  render() {
    return (
      null
    )
  }

}

export default App
