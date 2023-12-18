import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <div class={css.blackdrop}>
        <div className={css.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
