import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggle completed
  markCompleteFunc = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodoFunc = id => {
    const { todos } = this.state;
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...todos.filter(todo => todo.id !== id)]
      }));
  }

  addTodoFunc = title => {
    const { todos } = this.state;
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then(res => this.setState({ todos: [...todos, res.data] }));
    
  }

  render() {
    const { 
      state: {
        todos 
      },
      markCompleteFunc,
      deleteTodoFunc,
      addTodoFunc,
    } = this;

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <div>
                <AddTodo addTodo={addTodoFunc} />
                <Todos 
                  todos={todos} 
                  markCompleteFunc={markCompleteFunc}
                  deleteTodoFunc={deleteTodoFunc}
                />
              </div>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
