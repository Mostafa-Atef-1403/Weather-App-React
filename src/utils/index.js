export const DEFAULT_PLACE = {
  name: "Cairo",
  place_id: "cairo",
  adm_area1: "Cairo Governorate",
  adm_area2: null,
  country: "Egypt",
  lat: "30.06263N",
  lon: "31.24967E",
  timezone: "Africa/Cairo",
  type: "settlement",
};

export const MEASUREMENT_SYSTEM = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};

export const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "m/s",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    precipitation: "in/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "km/h",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
};
