import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    const { 
      props: {
        todos,
        markCompleteFunc,
        deleteTodoFunc,
      }
    }= this;

    return (
      <div>
        {
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              markCompleteFunc={markCompleteFunc}
              deleteTodoFunc={deleteTodoFunc}
            />
          ))
        }
      </div>
    )
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
  deleteTodoFunc: PropTypes.func.isRequired,
}

export default Todos;