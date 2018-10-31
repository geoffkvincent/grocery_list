import React from 'react'
import axios from 'axios'
import GroceryList from './components/GroceryList'
import ListForm from './components/ListForm'

class App extends React.Component {
  state= {items: []}
  
  componentDidMount() {
    axios.get('/api/items')
      .then( ({data: items}) => this.setState({items}))
  }

  addItem = (name) => {
    const {items} = this.state 
    axios.post('/api/items', {name, complete: false})
      .then(({data}) => {
        this.setState({ items: [data, ...items]})
      })
  }

  updateItem = () => {
    const {items} = this.state
    axios.put(`/api/items/${item.id}`)
  }

  deleteItem = () => {

  }

  render() {
    const {items} = this.state
    return (
      <div>
        <ListForm addItem={this.addItem}/>
        <GroceryList items={items}/>
      </div>
    )
  }

}

export default App
