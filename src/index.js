function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  cityElement.innerHTML = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  fetchWeatherData(apiUrl);
}
function fetchWeatherData(apiUrl) {
  axios
    .get(apiUrl)
    .then(displayTemperature)
    .catch((error) => console.error("Error fetching data:", error));
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = `${temperature}`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let apiKey = "3a335bb48bo85f01c326tf9592be14f5";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
