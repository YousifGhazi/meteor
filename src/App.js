import Page from "./components/Page";
import WeatherContextProvider from "./WeatherContextProvider";

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <Page></Page>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
