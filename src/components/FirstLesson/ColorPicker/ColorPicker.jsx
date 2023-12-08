import css from './ColorPicker.modal.css';

const ColorPicker = ({ options }) => (
  <div className={css.container}>
    <h2 className='title__colorPicker'>Color Picker</h2>

    <ul className='list__colorPicker'>
      {options.map(({ label, color }) => (
        <li
          key={label}
          className='item__colorPicker'
          style={{ backgroundColor: color }}
        ></li>
      ))}
    </ul>
  </div>
);

export default ColorPicker;
