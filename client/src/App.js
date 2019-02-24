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

  handleClick = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }

        return item
      })
    })

  }

  updateItem = () => { 
  }

  deleteItem = (id) => {
    const { items } = this.state
    axios.delete(`/api/items/${id}`)
      .then( () => {
        this.setState({ items: items.filter( i => i.id != id ) })
      })
  }

  render() {
    const {items} = this.state
    return (
      <div className='app'>
        <h2 className="header">Grocery List</h2>
        <ListForm addItem={this.addItem} />
        <GroceryList 
          items={items} 
          todoClick={this.handleClick}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }

}

export default App
