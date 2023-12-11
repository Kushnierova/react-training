import React, { Component } from 'react';
import css from './SecondLesson.module.css';
import shortid from 'shortid';

class SecondLesson extends Component {
  state = {
    // inputValue: '',
    name: '',
    lastName: '',
  };

  nameInputId = shortid.generate();
  lastNameInputId = shortid.generate();

  //   handleInputChange = e => {
  //     console.log(e.currentTarget.value);
  //     this.setState({ inputValue: e.currentTarget.value });
  //   };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  //   handleNameChange = e => {
  //     this.setState({ name: e.currentTarget.value });
  //   };
  //   handleLastName  = e => {
  //     this.setState({ lastName: e.currentTarget.value });
  //   };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', lastName: '' });
  };
  render() {
    // const { inputValue } = this.state;
    const { name } = this.state;
    const { lastName } = this.state;
    return (
      <div className={css.container}>
        {/* <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        ></input> */}

        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.lastNameInputId}>
            Last name
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              id={this.lastNameInputId}
            />
          </label>

          <button type="submit">Sent</button>
        </form>
      </div>
    );
  }
}

export default SecondLesson;
