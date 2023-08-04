const SearchAndSort = ({ searchQuery, handleSearchChange, sortBy, handleSortChange, sortDirection, handleSortDirectionChange }) => {
  const genreTitleMapping = {
    1: 'Personal Growth',
    2: 'True Crime and Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  };

  return (
    <div className="search-sort-container">
      <input type="text" placeholder="🔍 Search shows" value={searchQuery} onChange={handleSearchChange} />
      <select value={sortBy} onChange={handleSortChange}>
        <option value="[A-Z]">Sort [A-Z] 📚</option>
        <option value="[Z-A]">Sort [Z-A] 📚</option>
        <option value="genre">Sort by Genre 🎭</option>
        <option value="Oldest">Oldest 🗓️</option>
        <option value="Latest">Latest 🗓️</option>
      </select>

    </div>
  );
};

export default SearchAndSort;
