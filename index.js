// const API_KEY = process.env.API_KEY;

// console.log(API_KEY);
// const baseDomain = window.location.hostname;

// const getNewsUrl = async () => {
//   const response = await fetch(`${baseDomain}/api/get-data`);
//   const data = await response.json();
//   return data;
// };

// const urlNews = await getNewsUrl();

// console.log(urlNews);

// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const getNews = async () => {
  const response = await fetch(`/api/get-news`);
  const data = await response.json();
  return data;
};
const news = await getNews();

console.log(news);

const newList = document.getElementById("news-list");

news?.articles.forEach((article) => {
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

// const checkInterval = setInterval(() => {
//   const newList = document.getElementById("news-list");

//   if (newList) {
//     clearInterval(checkInterval);

//     fetch(url)
//       .then((repsonse) => repsonse.json())
//       .then((data) => {
//         console.log(data.articles);

//         data.articles.forEach((article) => {
//           const newItem = document.createElement("li");

//           const date = new Date(article.publishedAt);
//           const timeString = date.toLocaleTimeString("uk-UA", {
//             hour: "2-digit",
//             minute: "2-digit"
//           });

//           newItem.innerHTML = `
//            <a href = "${article.url}" target = "_blank">
//           <time>${timeString}</time>
//         <h3>${article.title}</h3>
//         <span/>
//         </a>
//       `;
//           newList.appendChild(newItem);
//         });
//       })
//       .catch((error) => console.error("Error", error));
//   }
// }, 100);
