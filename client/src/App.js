import React from 'react';
import ListForm from './components/ListForm';
import GroceryList from './components/GroceryList'

class App extends React.Component {
  state = { items: [] }

  componentDidMount() {
    fetch('/api/items')
      .then ( res => res.json() )
      .then ( items => this.setState({ items }) )
  }

  addItem = (name) => {
    const item = { name };
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then( res => res.json() )
    .then( item => {
      const { items } = this.state;
      this.setState({ items: [...items, item] });
    })
  }

  updateItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then(res => res.json() )
      .then( item => {
        const items = this.state.items.map( f => {
          if (f.id === id)
            return item
          return f;
        });

        this.setState({ items });
      })
  }

  deleteItem = (id) => {
    fetch(`api/items/${id}`, { method: 'DELETE' })
      .then( () => {
        const { items } = this.state;
        this.setState({ items: items.filter( f => f.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">
        <ListForm addItem={this.addItem} />
        <GroceryList
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
