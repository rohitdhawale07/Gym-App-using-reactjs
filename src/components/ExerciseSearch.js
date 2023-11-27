import React, { useState } from "react";

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for exercise..."
        className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2 w-full"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ExerciseSearch;
