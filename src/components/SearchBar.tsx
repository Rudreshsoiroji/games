import { Input } from "@chakra-ui/react";
import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event: any) {
    setSearchTerm(event.target.value);
  }

  return (
    <Input
      width="50%"
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
