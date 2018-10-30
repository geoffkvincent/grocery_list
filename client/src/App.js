import React from 'react'
import axios from 'axios'
import GroceryList from './components/GroceryList'

class App extends React.Component {
  state= {items: []}
  
  componentDidMount() {
    axios.get('/api/items')
      .then( ({data: items}) => this.setState({items}))
  }

  render() {
    const {items} = this.state
    return (
      <div>
        <GroceryList items={items}/>
      </div>
    )
  }

}

export default App
