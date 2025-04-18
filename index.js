// import CONFIG from "./src/config.js";

// const API_KEY = CONFIG.API_KEY;

// const API_KEY = process.env.API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey`;
// console.log(API_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const checkInterval = setInterval(() => {
    fetch("https://news-two-phi.vercel.app/api/get-data")
      .then((res) => res.json())
      .then((data) => {
        console.log("Отримано з сервера:", data);
      });

    const newList = document.getElementById("news-list");

    if (newList) {
      clearInterval(checkInterval);

      fetch(url)
        .then((repsonse) => repsonse.json())
        .then((data) => {
          console.log(data.articles);

          data.articles.forEach((article) => {
            const newItem = document.createElement("li");

            const date = new Date(article.publishedAt);
            const timeString = date.toLocaleTimeString("uk-UA", {
              hour: "2-digit",
              minute: "2-digit"
            });

            newItem.innerHTML = `
        <a href = "${article.url}" target = "_blank">
        <time>${timeString}</time>
        <h3>${article.title}</h3> 
        <span/>
        </a>
      `;
            newList.appendChild(newItem);
          });
        })
        .catch((error) => console.error("Error", error));
    }
  }, 100);
});
