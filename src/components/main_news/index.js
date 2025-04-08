document.addEventListener("DOMContentLoaded", () => {
  const mainNews = document.getElementById("main_news");

  if (mainNews) {
    mainNews.innerHTML = `
      <main>
        <div class="main_news">
          <ul id="news-list"></ul>
        </div>
      </main>
    `;
  } else {
    console.log("Element #main-news not found");
  }
});
