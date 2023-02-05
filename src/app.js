function displayWeatherForcast(response) {
  document.querySelector(".dayOneTextDay").innerHTML = `Mon`;
  document.querySelector(".dayOneTextTemp").innerHTML = `${Math.round(
    response.data.daily[1].temperature.day
  )}°F`;
  document.querySelector(".dayOneTextHumd").innerHTML = `${Math.round(
    response.data.daily[1].temperature.humidity
  )}%`;

  document.querySelector(".dayTwoTextDay").innerHTML = `Tue`;
  document.querySelector(".dayTwoTextTemp").innerHTML = `${Math.round(
    response.data.daily[2].temperature.day
  )}°F`;
  document.querySelector(".dayTwoTextHumd").innerHTML = `${Math.round(
    response.data.daily[2].temperature.humidity
  )}%`;

  document.querySelector(".dayThreeTextDay").innerHTML = `Wed`;
  document.querySelector(".dayThreeTextTemp").innerHTML = `${Math.round(
    response.data.daily[3].temperature.day
  )}°F`;
  document.querySelector(".dayThreeTextHumd").innerHTML = `${Math.round(
    response.data.daily[3].temperature.humidity
  )}%`;

  document.querySelector(".dayFourTextDay").innerHTML = `Thu`;
  document.querySelector(".dayFourTextTemp").innerHTML = `${Math.round(
    response.data.daily[4].temperature.day
  )}°F`;
  document.querySelector(".dayFourTextHumd").innerHTML = `${Math.round(
    response.data.daily[4].temperature.humidity
  )}%`;

  document.querySelector(".dayFiveTextDay").innerHTML = `Fri`;
  document.querySelector(".dayFoveTextTemp").innerHTML = `${Math.round(
    response.data.daily[5].temperature.day
  )}°F`;
  document.querySelector(".dayFiveTextHumd").innerHTML = `${Math.round(
    response.data.daily[5].temperature.humidity
  )}%`;

  document.querySelector(".daySixTextDay").innerHTML = `Sat`;
  document.querySelector(".daySixTextTemp").innerHTML = `${Math.round(
    response.data.daily[6].temperature.day
  )}°F`;
  document.querySelector(".daySixTextHumd").innerHTML = `${Math.round(
    response.data.daily[6].temperature.humidity
  )}%`;
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
  )}% humidity`;
  document.querySelector("#windSpeed").innerHTML = `${Math.round(
    response.data.wind.speed
  )}mph windspeed`;

  cityForecast("Detroit");
}

function searchCity(query) {
  let apiEndpoint = "https://api.shecodes.io/weather/v1/current";
  let key = "0bbef54a49efc7of4df96ea8t63e36a3";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?query=${query}&key=${key}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
}

searchCity("Detroit");

//Live Day/Date/Time
function dateFormat(current) {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = dayNames[current.getDay()];

  let monthNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  let monthNumber = monthNumbers[current.getMonth()];

  let day = current.getDate();
  let year = current.getFullYear();
  let hour = current.getHours();
  let amPm = "am";

  if (hour >= 12) {
    hour = `${hour}` - 12;
    amPm = `pm`;
  }

  if (hour === 0) {
    hour = `12`;
    amPm = `am`;
  }

  let minutes = current.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${dayName} ${monthNumber}/${day}/${year} &nbsp ${hour}:${minutes}${amPm}`;
}

let currentDateTime = document.querySelector("#dayDateTime");
let current = new Date();
currentDateTime.innerHTML = dateFormat(current);
