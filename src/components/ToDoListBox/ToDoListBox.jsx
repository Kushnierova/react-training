import React, { Component } from 'react';
import shortid from 'shortid';
import css from './ToDoListBox.module.css';
import ToDoList from './ToDoList';
import ToDoEditor from './ToDoEditor';
import Filter from './Filter';

class ToDoListBox extends Component {
  state = {
    todos: [],
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      // text: text, Коротка властивість нижче
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      // Додати на початок списку
      todos: [todo, ...todos],
      // Додати на кінець списку
      // todos: [ ..todos, todo],
    }));
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if(parsedTodos){
    // console.log(todos);
    // console.log(parsedTodos);
    this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);

    if (this.state.todos !== prevState.todos) {
      // console.log('Updates Todos');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    // console.log('App render');
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    // console.log(CompletedTodos.length);
    const CompletedTodos = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <div className={css.container}>
        <ToDoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <h2>Колекція нотатків</h2>
        <p>Загальна кількість: {totalTodoCount}</p>
        <p>Виконано: {CompletedTodos}</p>

        <ToDoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default ToDoListBox;
