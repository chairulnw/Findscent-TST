import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    brand: string;
    gender: string;
    yearRange: string;
    mainAccord: string;
  }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [yearRange, setYearRange] = useState("");
  const [mainAccord, setMainAccord] = useState("");

  const handleApplyFilters = () => {
    onFilterChange({ brand, gender, yearRange, mainAccord });
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Filter by Brand */}
      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      />

      {/* Filter by Gender */}
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      >
        <option value="">Pilih Gender</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Unisex">Unisex</option>
      </select>

      {/* Filter by Year Range */}
      <select
        value={yearRange}
        onChange={(e) => setYearRange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      >
        <option value="">Pilih Tahun</option>
        <option value="1990-2000">1990 - 2000</option>
        <option value="2000-2010">2000 - 2010</option>
        <option value="2010-2020">2010 - 2020</option>
        <option value="2020-2024">2020 - 2024</option>
      </select>

      {/* Filter by Main Accord */}
      <input
        type="text"
        placeholder="Main Accord (e.g., Floral)"
        value={mainAccord}
        onChange={(e) => setMainAccord(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      />

      {/* Apply Filters Button */}
      <button
        onClick={handleApplyFilters}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Terapkan Filter
      </button>
    </div>
  );
};

export default Filter;
