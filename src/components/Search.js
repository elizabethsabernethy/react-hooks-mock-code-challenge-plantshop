import React from "react";

function Search({filterPlants}) {

function handleSearchPlants(e){
  filterPlants(e.target.value)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchPlants}
      />
    </div>
  );
}

export default Search;
