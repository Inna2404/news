const headerContainer = document.getElementById("header_container");

if (headerContainer) {
  headerContainer.innerHTML = `
       <header class="news_header">
          <ul class="news-list">
            <li class="news_item">
              <a href="#">
                <div>
                <h1>Logo</h1>
                </div>
              </a>
            </li>
            <li class="news_item">
              <div class="news_item__search">
                <input type="text" id="searchInput" target="blank" />
                <button id="searchButton">Search</button>
              </div>
            </li>

            <ul class="news-list_btn">
              <li class="news_item news_item_border">
                <a href="#" id="weather-link"> wether</a>
              </li>
              <li class="news_item news_item_border">
                <a href="#" id="fuel-link"> fuel </a>
              </li>
              <li class="news_item news_item_border">
                <a href="#" id="currency-link"> currency </a>
              </li>

              <li class="news_item news_item_border">
                <a href="#" id ="films-link"> films </a>
              </li>
            </ul>
          </ul>
        </header>
    `;
} else {
  console.error("Element #header-container not found");
}
