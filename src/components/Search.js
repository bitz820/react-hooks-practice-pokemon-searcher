import React, {useState} from "react";

function Search({setSearch}) {

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div onChange={handleChange} className="ui search">
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
