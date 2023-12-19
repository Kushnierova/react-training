import React from 'react';
import css from './Todo.module.css'

const Todo = ({text, completed, onToggleCompleted, onDelete}) => {
  return (
    <>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className={css.text}>{text}</p>

      <button type="button" className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default Todo;
