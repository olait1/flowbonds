import React from 'react';

const Filter = () => {
  return (
    <select className='form-control d-inline mr-2' name="filter" id="filterSelect" style={{ marginRight: '5px', display: 'inline-block' }}>
      <option value="filter">filter</option>
      <option value="id">Id</option>
      <option value="name">name</option>
    </select>
  );
};

export default Filter;