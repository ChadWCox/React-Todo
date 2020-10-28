import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'


const todos = [
  {
    name: 'Take out the trash',
    id: 1,
    completed: false
  },
  {
    name: 'buy milk',
    id: 2,
    completed: false
  }
]



class App extends React.Component {
  
  constructor() {
    super()
    this.state = { todos }
  }

  handleToddleTodo = (todoID) => {
    this.setState({
      todos:this.state.todos.map(todo => {
        if(todo.id === todoID) {
        return { ...todo, completed: !todo.completed
        }
      }
        else {
          return todo;
        }
    })
    })
  }

  handleAddTodo = (name) => {
    this.setState({
      todos:[ ...this.state.todos, { 
        name: name,
        id: this.state.todos.length,
        completed: false
      }]
    })
  }

  clearTodos = () => {
    this.setState({
      todos:this.state.todos.filter(todo => (!todo.completed))
    })
  }


  render() {
    return (
      <div>
        <header>
          <h1>Todo List</h1>
        
          <TodoForm handleAddTodo={this.handleAddTodo}/>
        </header>
        <TodoList handleClearTodos={this.clearTodos} handleToddleTodo={this.handleToddleTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
