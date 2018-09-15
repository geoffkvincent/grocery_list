import React from 'react';
import ListForm from './components/ListForm';
import GroceryList from './components/GroceryList'

class App extends React.Component {
  state = { list: [] }

  componentDidMount() {

  }

  addItem = (name) => {

  }

  updateItem = (name) => {

  }

  updateItem = (id) => {

  }

  deleteItem = (id) => {

  }

  render() {
    return (
      <div className="container">
        <ListForm addItem={this.addItem} />
        <GroceryList
          list={this.state.list}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
