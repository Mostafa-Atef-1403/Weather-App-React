import { useContext } from "react";
import WeatherContext from "../context/weather.context";

const HourlyForecastWidget = ({ data }) => {
  const { date, icon, summary, temperature, precipitation, wind } = data;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  weather_date.day =
    weather_date.day === now_date.day && weather_date.time === now_date.time
      ? "Now"
      : weather_date.time === "12:00 ص"
      ? weather_date.day
      : "";

  const { units } = useContext(WeatherContext);

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon-temp">
        <div className="icon">
          <img
            src={`${process.env.PUBLIC_URL}/weather_icons/set03/big/${icon}.png`}
            alt={summary}
            draggable={false}
          />
        </div>
        <div className="temperature">
          {Math.round(temperature)} {units.temperature}
        </div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
      <div className="wind">
        <div className="speed">
          {Math.round(wind.speed)} {units.wind_speed}
        </div>
        <div
          className="wind-dir"
          style={{
            transform: `rotate(${-45 + wind.angle}deg) translatey(5px)`,
          }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecastWidget;
