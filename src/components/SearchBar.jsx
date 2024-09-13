import { useState } from "react";

const SearchBar = ({ handleSearchTerms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      alert("Please enter a search term");
      return;
    }
    handleSearchTerms(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        // disabled={true}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        type="text"
        value={searchTerm}
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
