import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter by name: 
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
