import "../styles/components/Search.scss";
import { searchPlaces } from "../api/index";
import { useContext, useState } from "react";
import WeatherContext from "../context/weather.context";

const Search = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setPlace } = useContext(WeatherContext);
  const [openResults, setOpenResults] = useState(false);

  async function onSearch(e) {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data);
    setOpenResults(data.length);
  }

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenResults(false);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Enter City Name...."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openResults ? (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className="result"
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Search;
