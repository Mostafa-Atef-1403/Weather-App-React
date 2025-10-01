import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEM, UNITS } from "../utils/index.js";
import { getWeatherData } from "../api/index.js";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEM.AUTO
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);

      // Current weather
      const cw = await getWeatherData(
        "current",
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);
      setUnits(UNITS[cw.units]);

      // Hourly Weather
      const hw = await getWeatherData(
        "hourly",
        place.place_id,
        measurementSystem
      );
      setHourlyForecast(hw.hourly.data);

      // Daily Weather
      const dw = await getWeatherData(
        "daily",
        place.place_id,
        measurementSystem
      );
      setDailyForecast(dw.daily.data);

      setLoading(false);
    }

    _getWeatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        dailyForecast,
        hourlyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
