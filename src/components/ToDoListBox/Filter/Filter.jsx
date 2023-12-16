import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        type="text"
        value={value}
        placeholder="Filter by name: "
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
