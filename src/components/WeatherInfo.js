import { useContext, useState } from "react";
import { weatherContext } from "../WeatherContextProvider";
import defaultIcon from "../images/icons/default.svg";

const WeatherInfo = () => {
  const { weather } = useContext(weatherContext);
  const [icon, setIcon] = useState();

  import(`../images/icons/${weather?.main}.svg`)
    .then((icon) => setIcon(icon.default))
    .catch(() => setIcon(defaultIcon));

  return (
    <div className="weather-info ">
      <h1 className="temperature">{weather?.temp}°</h1>
      <div>
        <p className="location">{weather?.location}</p>
        <div className="date-time ">
          <span>{weather?.time}</span>
          <span> - </span>
          <span> {weather?.date}</span>
        </div>
      </div>
      <div>
        <img src={icon} className="weather-icon" alt="weather icon" />
        <span className="weather-status">{weather?.main}</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
