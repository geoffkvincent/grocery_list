import React from 'react';
import ListForm from './components/ListForm';
import GroceryList from './components/GroceryList'

class App extends React.Component {
  state = { items: [] }

  componentDidMount() {

  }

  addItem = (name) => {
    const { items } = this.state;
    const id = Math.floor((1 + Math.random()) * 0x1000).toString()
    this.setState({ items: [ ...items, { id, name }] });
  }

  updateItem = (name) => {

  }

  updateItem = (id) => {

  }

  deleteItem = (id) => {
  const { items } = this.state;
  this.setState({ items: items.filter( t => t.id !==id) })
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
