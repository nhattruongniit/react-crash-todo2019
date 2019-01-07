import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    const { todo } = this.props;
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { 
      props: {
        todo: {
          title, id
        },
        markCompleteFunc,
        deleteTodoFunc,
      },
      getStyle,
     } = this

    return (
      <div style={getStyle()}>
        <input type="checkbox" onChange={() => markCompleteFunc(id)} />
        { title }
        <button 
          type="button" 
          style={btnStyle}
          onClick={() => deleteTodoFunc(id)}
        >
          x
        </button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
  deleteTodoFunc: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}

export default TodoItem;