document
  .getElementById("currency-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("currency-section").style.display = "block";
    document.getElementById("weather-section").style.display = "none";
    document.getElementById("fuel-section").style.display = "none";
    document.getElementById("films-section").style.display = "none";

    getCurrency();
  });

document
  .getElementById("weather-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("weather-section").style.display = "block";
    document.getElementById("currency-section").style.display = "none";
    document.getElementById("fuel-section").style.display = "none";
    document.getElementById("films-section").style.display = "none";

    // getWeather();
  });

document
  .getElementById("fuel-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("fuel-section").style.display = "block";
    document.getElementById("weather-section").style.display = "none";
    document.getElementById("currency-section").style.display = "none";
    document.getElementById("films-section").style.display = "none";
  });

document
  .getElementById("films-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("films-section").style.display = "block";
    document.getElementById("weather-section").style.display = "none";
    document.getElementById("fuel-section").style.display = "none";
    document.getElementById("currency-section").style.display = "none";
  });

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".news_item_border");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      navItems.forEach((el) => el.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
