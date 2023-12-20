import React, { Component } from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';

class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    // console.log(this.props.items[this.state.index]);
    const currentItem = this.props.items[this.state.index];
    return (
      <div>
        <Controls onChange={this.changeIndex} />
        <Progress
          current={this.state.index + 1}
          total={this.props.items.length}
        />
        <Publication item={currentItem} />
      </div>
    );
  }
}

export default Reader;
