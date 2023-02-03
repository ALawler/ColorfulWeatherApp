function displayWeatherForcast(response) {
  document.querySelector(".dayOneTextTemp").innerHTML = `${Math.round(
    response.data.daily[1].temperature.day
  )}°F`;
}

function cityForecast(query) {
  let apiEndpoint = "https://api.shecodes.io/weather/v1/forecast";
  let key = "0bbef54a49efc7of4df96ea8t63e36a3";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?query=${query}&key=${key}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherForcast);
}

function displayWeather(response) {
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#place").innerHTML = response.data.city;
  document.querySelector("#temp").innerHTML = `${Math.round(
    response.data.temperature.current
  )} °F`;
  document.querySelector("#humidity").innerHTML = `${Math.round(
    response.data.temperature.humidity
  )}`;
  document.querySelector("#windSpeed").innerHTML = `${Math.round(
    response.data.wind.speed
  )}`;

  //cityForecast("Seattle");//
}

function searchCity(query) {
  let apiEndpoint = "https://api.shecodes.io/weather/v1/current";
  let key = "0bbef54a49efc7of4df96ea8t63e36a3";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?query=${query}&key=${key}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
}

searchCity("Seattle");
