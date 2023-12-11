import React, { Component } from 'react';

class SecondLesson extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    console.log(e.currentTarget.value);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        ></input>
      </div>
    );
  }
}

export default SecondLesson;
