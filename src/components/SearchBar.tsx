import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event: any) {
    setSearchTerm(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
