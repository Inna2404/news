import CONFIG from "../config.js";

const API_KEY_FILMS = CONFIG.API_KEY_FILMS;
let filmsData = [];
let currentIndex = 0;

function fetchFilms() {
  fetch(`http://www.omdbapi.com/?s=Batman&apikey=${API_KEY_FILMS}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Search) {
        filmsData = data.Search; // Зберігаємо дані фільмів
        displayFilm(currentIndex); // Відображаємо перший фільм
      } else {
        console.error("Don`t find films");
      }
    })

    .catch((error) => console.log(error));
}

function displayFilm(index) {
  const container = document.getElementById("films");
  container.innerHTML = "";

  const film = filmsData[index];
  const filmElement = document.createElement("div");
  filmElement.classList.add("film");

  filmElement.innerHTML = `
    <h2>${film.Title} (${film.Year})</h2>
    <img class="film_img" src="${film.Poster !== "N/A" ? film.Poster : "https://via.placeholder.com/150"}" alt="${film.Title}">
  `;

  container.appendChild(filmElement);
}

function changeFilm(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = filmsData.length - 1; // Якщо це перший фільм, показуємо останній
  } else if (currentIndex >= filmsData.length) {
    currentIndex = 0; // Якщо це останній фільм, показуємо перший
  }

  displayFilm(currentIndex);
}

document.getElementById("prevBtn").onclick = () => changeFilm(-1);
document.getElementById("nextBtn").onclick = () => changeFilm(1);

fetchFilms();
