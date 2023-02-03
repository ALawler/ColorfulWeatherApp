function searchCity(query) {
  let apiEndpoint = "https://api.shecodes.io/weather/v1/current";
  let key = "0bbef54a49efc7of4df96ea8t63e36a3";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?q=${query}&key=${key}&units=${units}`;

  axios.get(apiUrl).then(console.log(apiUrl));
}

searchCity("Detroit");
