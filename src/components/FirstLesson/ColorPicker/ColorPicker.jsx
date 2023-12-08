import React, { Component } from 'react';
// import css from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = index => {
    const optionClasses = ['item__ColorPicker'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('item--active__ColorPicker');
    }

    return optionClasses.join(' ');
  };

  render() {
    const {activeOptionIdx} = this.state;
    const {options} = this.props;  
    const { label } = options[activeOptionIdx];
    return (
      <div className="container__ColorPicker">
        <h2 className="title__ColorPicker">Color Picker</h2>
        <p className="p__ColorPicker">You chose {label} color</p>
        <ul className="list__ColorPicker">
          {options.map(({ label, color }, index) => (
            <li>
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
