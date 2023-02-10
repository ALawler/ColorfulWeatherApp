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

  return `${dayName} ${monthNumber}/${day}/${year} ${hour}:${minutes}${amPm}`;
}

let currentDateTime = document.querySelector("#dayDateTime");
let current = new Date();
currentDateTime.innerHTML = dateFormat(current);

//Main Weather and Forecast API
function displayWeatherForcast(response) {
  document.querySelector(".dayOneTextDay").innerHTML = `Mon`;
  document.querySelector(".dayOneTextTemp").innerHTML = `${Math.round(
    response.data.daily[0].temperature.day
  )}°F`;
  document.querySelector(".dayOneTextHumd").innerHTML = `${Math.round(
    response.data.daily[0].temperature.humidity
  )}%`;

  document.querySelector(".dayTwoTextDay").innerHTML = `Tue`;
  document.querySelector(".dayTwoTextTemp").innerHTML = `${Math.round(
    response.data.daily[1].temperature.day
  )}°F`;
  document.querySelector(".dayTwoTextHumd").innerHTML = `${Math.round(
    response.data.daily[1].temperature.humidity
  )}%`;

  document.querySelector(".dayThreeTextDay").innerHTML = `Wed`;
  document.querySelector(".dayThreeTextTemp").innerHTML = `${Math.round(
    response.data.daily[2].temperature.day
  )}°F`;
  document.querySelector(".dayThreeTextHumd").innerHTML = `${Math.round(
    response.data.daily[2].temperature.humidity
  )}%`;

  document.querySelector(".dayFourTextDay").innerHTML = `Thu`;
  document.querySelector(".dayFourTextTemp").innerHTML = `${Math.round(
    response.data.daily[3].temperature.day
  )}°F`;
  document.querySelector(".dayFourTextHumd").innerHTML = `${Math.round(
    response.data.daily[3].temperature.humidity
  )}%`;

  document.querySelector(".dayFiveTextDay").innerHTML = `Fri`;
  document.querySelector(".dayFiveTextTemp").innerHTML = `${Math.round(
    response.data.daily[4].temperature.day
  )}°F`;
  document.querySelector(".dayFiveTextHumd").innerHTML = `${Math.round(
    response.data.daily[4].temperature.humidity
  )}%`;

  document.querySelector(".daySixTextDay").innerHTML = `Sat`;
  document.querySelector(".daySixTextTemp").innerHTML = `${Math.round(
    response.data.daily[5].temperature.day
  )}°F`;
  document.querySelector(".daySixTextHumd").innerHTML = `${Math.round(
    response.data.daily[5].temperature.humidity
  )}%`;

  let dayOneIcon = document.querySelector(".dayOneIcon");
  let dayTwoIcon = document.querySelector(".dayTwoIcon");
  let dayThreeIcon = document.querySelector(".dayThreeIcon");
  let dayFourIcon = document.querySelector(".dayFourIcon");
  let dayFiveIcon = document.querySelector(".dayFiveIcon");
  let daySixIcon = document.querySelector(".daySixIcon");

  dayOneIcon.setAttribute(
    "src",
    `${response.data.daily[0].condition.icon_url}`
  );
  dayOneIcon.setAttribute(
    "alt",
    `${response.data.daily[0].condition.description}`
  );

  dayTwoIcon.setAttribute(
    "src",
    `${response.data.daily[1].condition.icon_url}`
  );
  dayTwoIcon.setAttribute(
    "alt",
    `${response.data.daily[1].condition.description}`
  );

  dayThreeIcon.setAttribute(
    "src",
    `${response.data.daily[2].condition.icon_url}`
  );
  dayThreeIcon.setAttribute(
    "alt",
    `${response.data.daily[2].condition.description}`
  );

  dayFourIcon.setAttribute(
    "src",
    `${response.data.daily[3].condition.icon_url}`
  );
  dayFourIcon.setAttribute(
    "alt",
    `${response.data.daily[3].condition.description}`
  );

  dayFiveIcon.setAttribute(
    "src",
    `${response.data.daily[4].condition.icon_url}`
  );
  dayFiveIcon.setAttribute(
    "alt",
    `${response.data.daily[4].condition.description}`
  );

  daySixIcon.setAttribute(
    "src",
    `${response.data.daily[5].condition.icon_url}`
  );
  daySixIcon.setAttribute(
    "alt",
    `${response.data.daily[5].condition.description}`
  );
}

function cityForecast(query) {
  let apiEndpoint = "https://api.shecodes.io/weather/v1/forecast";
  let key = "0bbef54a49efc7of4df96ea8t63e36a3";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?query=${query}&key=${key}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherForcast);
}

function displayWeather(response) {
  let mainIcon = document.querySelector(".mainIcon");

  mainIcon.setAttribute("src", `${response.data.condition.icon_url}`);
  mainIcon.setAttribute("alt", `${response.data.condition.description}`);

  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#place").innerHTML = response.data.city;
  document.querySelector("#temp").innerHTML = `${Math.round(
    response.data.temperature.current
  )}`;
  document.querySelector("#humidity").innerHTML = `${Math.round(
    response.data.temperature.humidity
  )}% humidity`;
  document.querySelector("#windSpeed").innerHTML = `${Math.round(
    response.data.wind.speed
  )}mph windspeed`;
}

function searchCity(query) {
  let apiEndpoint = "https://api.shecodes.io/weather/v1/current";
  let key = "0bbef54a49efc7of4df96ea8t63e36a3";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?query=${query}&key=${key}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
}

function submitCityForecast(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".cityInput");
  searchCity(cityInput.value);
  cityForecast(cityInput.value);
  dateFormat(cityInput.value);
}

let serchForm = document.querySelector("searchForm");
searchForm.addEventListener("submit", submitCityForecast);

searchCity("Detroit");
cityForecast("Detroit");
