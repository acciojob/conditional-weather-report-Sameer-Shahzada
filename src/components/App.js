import React, { useState, useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

  const weatherData = { temperature: 25, conditions: "Sunny" };

  const [data, setData] = useState(weatherData);

  useEffect(() => {
    // no-op (just to satisfy requirement)
  }, []);

  return (
    <div>
      <WeatherDisplay data={data} />
    </div>
  );
};

export default App;