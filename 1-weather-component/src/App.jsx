import { useState } from "react";
import Forecast from "./Forecast";
import CitiesList from "./CitiesList";
import weather from "./data/weather"

function App() {
  const [weatherList, addWeather] = useState(weather)
  const [selectedCity, selectCity] = useState(weatherList[0]); // TODO: Cseréld le ezt a változót, hogy a komponens belső állapotára hivatkozzon
  const handleCityChange = (id) => {
    // TODO: Állítsd be a kiválasztott várost
    var name = id.target.innerHTML
    var elem = -1
    weatherList.map(e => (
      e.name === name ? elem = e.id : {}
    ))
    if (elem !== -1)
    {
      selectCity(e => weatherList[elem-1])
      //console.log(weatherList[elem-1])
    }
  };
  return (
    <div className="flex flex-col items-center  w-full">
      <h1 className="text-5xl text-blue-700">Időjárás</h1>
      <CitiesList
        weatherList={weatherList}
        handleCityChange={handleCityChange}
      />
      <Forecast cityData={selectedCity} />
    </div>
  );
}

export default App;
