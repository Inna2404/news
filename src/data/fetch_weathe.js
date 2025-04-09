import CONFIG from "../config.js";

const weather = document.getElementById("weather");

const citySelect = document.createElement("select");
citySelect.classList.add("weather_city");
weather.appendChild(citySelect);

const cities = [
  "Uzhhorod",
  "Ivano-Frankivsk",
  "Lviv",
  "Lutsk",
  "Rivne",
  "Ternopil",
  "Chernivtsi",
  "Zhytomyr",
  "Vinnytsia",
  "Odessa",
  "Mykolaiv",
  "Kirovohrad",
  "Cherkasy",
  "Kyiv",
  "Chernihiv",
  "Sumy",
  "Poltava",
  "Dnipro",
  "Kherson",
  "Zaporizhzhia",
  "Donetsk",
  "Kharkiv",
  "Luhansk"
];
cities.sort();

cities.forEach((city) => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
});

function fetchWeather(city) {
  const API_KEY_WEATHER = CONFIG.API_KEY_WEATHER;

  if (!API_KEY_WEATHER) {
    console.error("API key is missing or not defined in .env");
    return;
  }

  // const urlWeather = `/api/weather?city=${city}`;
  const urlWeather = `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=${city}`;

  fetch(urlWeather)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error.message);
      }

      const weatherContent = document.createElement("div");
      weatherContent.classList.add("weather_block");
      weatherContent.innerHTML = `
        <div class="weather_block_wrap">
          <p class="weather_temp">${Math.round(data.current.temp_c)}°C</p>
          <div class="weather_block_img"></div>
          <div class="weather_describe_block">
            <p><span>humidity: </span>${data.current.humidity}%</p>
            <p><span>pressure: </span>${data.current.pressure_mb} mm</p>
            <p><span>wind:</span>${data.current.wind_kph} km/h</p>
        </div>
      </div>
    `;

      const existinWeightContenr = document.querySelector(".weather_block");
      if (existinWeightContenr) {
        existinWeightContenr.remove();
      }
      weather.appendChild(weatherContent);
    })
    .catch((err) => {
      console.error("Error fetching weather", err);
      weather.innerHTML = "Error downloading weather data";
    });
}

citySelect.addEventListener("change", (event) => {
  const selectedCityName = event.target.value;
  fetchWeather(selectedCityName);
});
fetchWeather(cities[0]);
