const SearchBar = ({ setLocation, handler }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={(e) => (e.code === "Enter" ? handler() : "")}
      />
    </div>
  );
};

export default SearchBar;
