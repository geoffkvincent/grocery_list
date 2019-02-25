import React from 'react'

class EditForm extends React.Component {
  state = { name: '', itemToEdit: {} }

  componentDidMount(){
    const { editItem }  = this.props
    this.setState({ name: editItem.name, itemToEdit: editItem })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, itemToEdit} = this.state
    this.props.updateItem(name, itemToEdit.id)
    this.setState({name: ''})
  }

  render(){
    const { name } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          onChange={this.handleChange}
          required
          placeholder='add item'
        />
      </form>
    )
  }
}

export default EditForm