import React from "react";

const SearchBox = ({ searchBoxProps }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="model keresés..."
        onChange={searchBoxProps}
      />
    </div>
  );
};

export default SearchBox;
