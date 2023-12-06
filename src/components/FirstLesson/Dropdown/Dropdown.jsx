import React, { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className={css.dropdown}>
        <button
          type="button"
          className={css.dropdown__toggle}
          //   onClick={this.show}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide':'Show' }
        </button>

        {/* <button
          type="button"
          className={css.dropdown__toggle}
          //   onClick={this.hide}
        >
          Сховати
        </button> */}

        {this.state.visible && (
          <div className={css.dropdown__menu}>Випадаючe віконечко</div>
        )}
      </div>
    );
  }
}
export default Dropdown;
