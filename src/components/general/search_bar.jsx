import React from 'react';


const SearchBar = ({placeholder }) => {
  return (

    <div
    className="input-group mx-3"
    style={{ maxWidth: '300px', flexGrow: 1 }}
  >
    <span className="input-group-text bg-white border-end-0">
      <i className="fa fa-search text-muted"></i>
    </span>
    <input
      type="text"
      className="form-control border-start-0"
      placeholder={placeholder}
    />
  </div>
  );
};

export default SearchBar;
