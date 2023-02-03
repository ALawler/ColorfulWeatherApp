function searchCity(city) {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "a5e6bc0563de46e667d1f0cec4ca9913";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?q=${city}$appid=${apiKey}$units=${units}`;

  axios.get(apiUrl).then(console.log(apiUrl));
}

searchCity("Detroit");
