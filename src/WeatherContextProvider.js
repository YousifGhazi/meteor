import { createContext, useState } from "react";
import API_KEY from "./API";
import { format } from "date-fns";

export const weatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const fetchData = async (loaction) => {
    if (loaction) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${loaction}&units=metric&APPID=${API_KEY}`
      ).then((res) => res.json());

      // destructure data object to create new object containing the needed information
      if (data.cod === 200) {
        const temp = Math.round(data.main.temp);
        const main = data.weather[0].main.toLowerCase();
        const location = data.name;
        const date = format(new Date(), "EEEE, dd MMM yy");
        const time = format(new Date(), "p");

        setWeather({ temp, main, location, date, time });

        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <weatherContext.Provider
      value={{
        weather,
        fetchData,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherContextProvider;
