import React from 'react';
import classNames from 'classnames/bind';
import css from './ToDoList.module.css';
import Todo from '../Todo';

const cx = classNames.bind(css);

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={cx('listItem', { listItemCompleted: completed })}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default ToDoList;
