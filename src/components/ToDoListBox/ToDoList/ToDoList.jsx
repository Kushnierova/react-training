import React from 'react';

const ToDoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
