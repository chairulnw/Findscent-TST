import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}




const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Cari parfum..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black" // Tulisan jadi hitam
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Cari
      </button>
    </div>
  );
};

export default SearchBar;
