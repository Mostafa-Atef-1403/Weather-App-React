import { useContext } from "react";
import WeatherContext from "../context/weather.context";

const DailyForecastWidget = ({ data }) => {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day =
    weather_date.day === now_date.day ? "today" : weather_date.day;

  const { units } = useContext(WeatherContext);

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
          <img
            src={`${process.env.PUBLIC_URL}/weather_icons/set03/big/${icon}.png`}
            alt={summary}
            draggable={false}
          />
        </div>
        <div className="temperature">
          <div className="max">
            <i className="bi bi-arrow-up"></i>
            {Math.round(temperature_max)} {units.temperature}
          </div>
          <div className="min">
            <i className="bi bi-arrow-down"></i>
            {Math.round(temperature_min)} {units.temperature}
          </div>
        </div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
    </div>
  );
};

export default DailyForecastWidget;
