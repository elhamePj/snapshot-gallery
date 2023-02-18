import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ handleSearchButton }) => {
  const [searchInput, setSearchInput] = useState("");

  const updateSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        onChange={updateSearchInput}
        value={searchInput}
        placeholder="Search..."
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSearchButton(searchInput);
        }}
      >
        <FiSearch className="searchIcon" />
      </button>
    </div>
  );
};

export default SearchBox;
