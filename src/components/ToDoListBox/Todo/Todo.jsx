import React from 'react';
import css from './Todo.module.css';
import { ReactComponent as DeleteIcon } from '/Kateryna/GoIT/react-homework-template/src/icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
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
        <DeleteIcon width="20" height="20" fill="black" />
      </button>
    </>
  );
};

export default Todo;
