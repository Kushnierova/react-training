import React, { Component } from 'react';
import css from './ToDoListBox.module.css';
import ToDoList from './ToDoList';
import ToDoEditor from './ToDoEditor';

class ToDoListBox extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('It is');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    // Те саме, але через тернарний оператор

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    }));
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
        <ToDoEditor />
        <h2>Колекція нотатків</h2>
        <p>Загальна кількість: {totalTodoCount}</p>
        <p>Виконано: {CompletedTodos}</p>
        <ToDoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default ToDoListBox;
