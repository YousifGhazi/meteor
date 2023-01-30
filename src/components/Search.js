import { useEffect, useState, useContext } from "react";
import { weatherContext } from "../WeatherContextProvider";
import SearchIcon from "./SearchIcon";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";

const Search = () => {
  const { fetchData } = useContext(weatherContext);
  const [location, setLocation] = useState(null);
  const [historyItems, setHistoryItems] = useState([]);

  // updating the search history using local storage
  function upDateHistory(item) {
    if (localStorage.getItem("historyItems")) {
      if (item) {
        const localItems = JSON.parse(
          localStorage.getItem("historyItems")
        );
        localItems.unshift(item);
        localStorage.setItem("historyItems", JSON.stringify(localItems));
        setHistoryItems(localItems);
      } else {
        setHistoryItems(JSON.parse(localStorage.getItem("historyItems")));
      }
    } else {
      localStorage.setItem("historyItems", "[]");
    }
  }

  useEffect(upDateHistory, []);

  async function handler() {
    if (await fetchData(location)) {
      upDateHistory(location);
    }
  }

  return (
    <>
      <div className="search">
        <SearchBar setLocation={setLocation} handler={handler}></SearchBar>
        <SearchIcon handler={handler}></SearchIcon>
        <SearchHistory historyItems={historyItems}></SearchHistory>
      </div>
    </>
  );
};

export default Search;
