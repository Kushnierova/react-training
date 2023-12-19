import React, { PureComponent } from 'react';
// Цей варіант для SASS
// https://github.com/JedWatson/classnames
// npm install classnames Треба в терміналі
import classNames from 'classnames';

// import css from './ColorPicker.module.css';

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 0,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  // Це без бібліотеки ClassNames
  // makeOptionClassName = index => {
  //   const optionClasses = ['item__ColorPicker'];

  //   if (index === this.state.activeOptionIdx) {
  //     optionClasses.push('item--active__ColorPicker');
  //   }

  //   return optionClasses.join(' ');
  // };

  // Це з бібліотекою ClassName, де ClassNames це функція цієї бібліотеки
  makeOptionClassName = index => {
    return classNames('item__ColorPicker', {
      'item--active__ColorPicker': index === this.state.activeOptionIdx,
    });
  };

  render() {
    console.log(`Re-render Colorpicker @ ${Date.now()}`);
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="container__ColorPicker">
        <h2 className="title__ColorPicker">Color Picker</h2>
        <p className="p__ColorPicker">You chose {label} color</p>
        <ul className="list__ColorPicker">
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              // Також можна написали інлайн функцією
              // className={classNames('item__ColorPicker', {
              //   'item--active__ColorPicker': index === this.state.activeOptionIdx,
              // })}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
