const weatherContainer = document.getElementById("weather_container");

if (weatherContainer) {
  weatherContainer.innerHTML = `
    
      <div class="aside_left" id="weather-section" style="display: block">
              <div id="weather"></div>
         </div>
    `;
} else {
  console.error("Element #weather_container not found");
}
