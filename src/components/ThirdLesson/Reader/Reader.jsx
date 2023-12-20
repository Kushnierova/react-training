import React, { Component } from 'react';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };
  render() {
    return (
      <div>
        <Controls />
        <Progress />
        <Publication />
      </div>
    );
  }
}

export default Reader;
