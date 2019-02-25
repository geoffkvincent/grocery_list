import React from 'react'

class EditForm extends React.Component {
  state = { name: ''}

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateItem(this.state.name)
    this.setState({name: ''})
  }

  render(){
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