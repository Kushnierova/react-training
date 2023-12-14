import React from 'react';
import classNames from 'classnames/bind';
import css from './ToDoList.module.css';

const cx = classNames.bind(css);

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  
  
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={cx('listItem', { listItemCompleted: completed })}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={css.text}>{text}</p>

        <button
          type="button"
          className={css.btn}
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
