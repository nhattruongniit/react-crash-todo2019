import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      state: { title },
      props: { addTodo }
    } = this;
    addTodo(title);
    this.setState({ title: '' })
  }
  
  render() {
    const { 
      state: {
        title,
      },
      onChange,
      onSubmit
    } = this;

    return (
      <form onSubmit={onSubmit} style={{display: 'flex'}}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add Todo ..." 
          style={{flex: '10', padding: '5px'}}
          value={title}
          onChange={onChange}
        />
        <input 
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo;