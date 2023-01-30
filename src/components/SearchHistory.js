const SearchHistory = ({ historyItems }) => {
  return (
    <div className="search-history">
      <h2>History</h2>
      <ul className="history_list">
        {historyItems &&
          historyItems.map((string, i) => {
            return <li key={i}>{string}</li>;
          })}
      </ul>
    </div>
  );
};

export default SearchHistory;
