import React, {Fragment} from 'react'
import axios from 'axios'
import GroceryList from './components/GroceryList'

class App extends React.Component {
  state= {items: []}
  
  componentDidMount() {
    axios.get('/api/items')
      .then( ({data: items}) => this.setState({items}))
  }

  render() {
    return (
      <Fragment>
        <GroceryList />
      </Fragment>
    )
  }

}

export default App
