import React from 'react'

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
