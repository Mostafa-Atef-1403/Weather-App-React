import { useContext, useState } from "react";
import ThemeContext from "../context/theme.context";
import { MEASUREMENT_SYSTEM } from "../utils/index";
import "../styles/components/Settings.scss";
import WeatherContext from "../context/weather.context";

function Settings() {
  const { dark, setDark, saveThemeToLocalStorage } = useContext(ThemeContext);

  const [settings, openSettings] = useState(false);

  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeToLocalStorage(!dark);
  };

  const changeMeasurementSystem = (sys) => {
    setMeasurementSystem(sys);
  };

  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div
        className="settings-btn"
        onClick={() => {
          openSettings((val) => !val);
        }}
      >
        <i className={`bi bi-gear${settings ? "-fill" : ""}`}></i>
        <div className={`settings-menu ${settings ? "open" : ""}`}>
          <div className="measurement-systems">
            <h4>Measuremeant Systmes:</h4>
            <div className="systems">
              {Object.values(MEASUREMENT_SYSTEM).map((sys) => (
                <div
                  className={`system ${
                    sys === measurementSystem ? "active" : ""
                  }`}
                  key={sys}
                  onClick={() => changeMeasurementSystem(sys)}
                >
                  {sys}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
