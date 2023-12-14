import React, { Component } from 'react';
import css from './ToDoEditor.module.css';

class ToDoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <textarea
          className={css.textarea}
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={css.btn}>
          Add
        </button>
      </form>
    );
  }
}

export default ToDoEditor;
