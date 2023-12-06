import React from 'react';
import css from './ColorPicker.modal.css';

const ColorPicker = options => (
  <div className={css.container}>
    <h2 className={css.title}>Color Picker</h2>

    <div>
        {options.map(({label, color}) => (
            <li key={label} style={{backgroundColor: color}} ></li>
        ))}
    </div>
  </div>
);

export default ColorPicker;
