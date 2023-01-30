import { useContext } from "react";
import { weatherContext } from "../WeatherContextProvider";
import Search from "../components/Search";
import WeatherInfo from "../components/WeatherInfo";
import DefaultText from "../components/DefaultText";

export default function Home() {
  const { weather } = useContext(weatherContext);

  return (
    <main className={`page ${weather?.main}`}>
      <Search></Search>
      {weather ? <WeatherInfo></WeatherInfo> : <DefaultText />}
    </main>
  );
}
