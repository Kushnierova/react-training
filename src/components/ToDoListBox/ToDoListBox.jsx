import React, { Component } from 'react';
import css from './ToDoListBox.module.css'
import ToDoList from './ToDoList';

class ToDoListBox extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    // const CompletedTodos = todos.filter(todo => todo.completed);
    // console.log(CompletedTodos.length);
    const CompletedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <div className={css.container}>
        <h2>Колекція нотатків</h2>
        <p>Загальна кількість: {totalTodoCount}</p>
        <p>Виконано: {CompletedTodos}</p>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default ToDoListBox;
