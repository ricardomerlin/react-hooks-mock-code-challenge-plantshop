import React, { useState } from "react";

function Search({ bringSearchUp }) {

  const[search, setSearch] = useState('')

  function handleTextChange(e) {
    setSearch(e.target.value)
  }

  bringSearchUp(search)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleTextChange}
      />
    </div>
  );
}

export default Search;
