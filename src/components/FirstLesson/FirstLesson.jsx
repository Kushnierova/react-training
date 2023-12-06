// import PropTypes from 'prop-types';
// import css from './FirstLesson.module.css';
import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';

const options = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const FirstLesson = () => (
  <div>
    <div>
      <Dropdown />
    </div>
    <div>
      <ColorPicker options={options} />
    </div>
  </div>
);
// FirstLesson.propTypes = {
//   friends: PropTypes.array.isRequired,

export default FirstLesson;
