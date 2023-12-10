import React, { Component } from 'react';
import ToDoList from './ToDoList';

class ToDoListBox extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Колекція нотатків</h2>
        <ToDoList todos={todos} onDeleteTodo = {this.deleteTodo} />
      </div>
    );
  }
}

export default ToDoListBox;
