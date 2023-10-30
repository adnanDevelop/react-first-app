import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [cityName, setCityName] = useState("Islamabad");

  useEffect(() => {
    const fetchingData = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=24b59372dcab61b2483df72a0f48d41e`;

      let response = await fetch(url);
      let responseJson = await response.json();
      // ADDING DATA IN SETCITY
      setCity(responseJson.main);

      console.log(responseJson.main);
    };

    fetchingData();
  }, [cityName]);

  // getting input value
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mx-auto">
          <div className="weather_section bg-white p-4 rounded-2 shadow ">
            <h4 className="text-center mb-4">
              Weather <span className="text-primary">App</span>
            </h4>
            {/* SEARCH BOX START */}
            <div className="search_box">
              <input
                className="form-control shadow border-0 rounded-5"
                type="text"
                placeholder="Search any city"
                value={cityName}
                onChange={(event) => {
                  setCityName(event.target.value);
                }}
              />
            </div>

            {/* WEATHER APP BODY START */}
            <div className="weather_body mt-4 text-center">
              <h1 className="text-center ">
                <i className="fa-solid fa-sun weather_icon"></i>
              </h1>
              {(!city) ? (
                <p>No Data found.</p>
              ) : (
                <div>
                  <h3 className="mt-3 text-capitalize">{cityName} <span className="text-uppercase text-primary">cel</span></h3>

                  <div className="temp_section">
                    <h1>{Math.floor(city.temp)}</h1>
                    <p className="temp_max text-secondary">
                      Min : {Math.floor(city.temp_min)}* | Max : {Math.floor(city.temp_max)}*
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
