import React, { Component } from 'react';

class SecondLesson extends Component {
  state = {
    // inputValue: '',
    name: '',
    lastName: '',
  };

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

    console.log(this.state);
  };
  render() {
    // const { inputValue } = this.state;
    const { name } = this.state;
    const { lastName } = this.state;
    return (
      <div>
        {/* <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        ></input> */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sent</button>
        </form>
      </div>
    );
  }
}

export default SecondLesson;
