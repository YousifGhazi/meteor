import icon from "../images/icons/magnifying-glass-solid.svg";

const SearchIcon = ({ handler }) => {
  return (
    <div className="search-icon" onClick={handler}>
      <img width="25" height="25" alt="search icon" src={icon}></img>
    </div>
  );
};

export default SearchIcon;
