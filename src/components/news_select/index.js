const newsSelect = document.getElementById("news-select");

if (newsSelect) {
  newsSelect.innerHTML = `
         <div class="news_selected">
                <h4>Selected</h4>
                <a href="https://ua.sinoptik.ua">Sinoptik</a>
                <a href="https://rozetka.com.ua">Rozetka</a>
                <a href="https://www.booking.com/index.ru">Booking</a>
                <a href="https://www.work.ua">Work.ua</a>
              </div>
              <div class="news_autosites">
                <h4>Autosites</h4>
                <a href="https://rst.ua/ukr"
                  >Cars are sold on the website of RST</a
                >
                <a href="https://goroshina.ua/">Tire Center GoroSyna</a>
                <a href="https://avtosale.ukasko.ua"> Buy OSCPV online </a>
              </div>
              <div class="news_travel">
                <h4>Travel</h4>
                <a href="https://www.otpusk.ua">100% of tours on Otpusk.ua</a>
                <a href="https://www.accordtour.com/tur_bude"
                  >Guaranteed bus tours</a
                >
                <a href="https://www.booking.com/index.ru"
                  >Booking - housing reservation
                </a>
              </div>
              <div class="new_real-estate">
                <h4>Real estate</h4>
                <a href="https://dom.ria.com/uk"
                  >DIM.RIA - new buildings of Ukraine</a
                >
                <a href="https://lun.ua/">LUN - All new buildings </a>
                <a href="https://flatfy.ua/uk/"
                  >FLATFY - Search for apartments</a
                >
              </div>
    
    `;
} else {
  console.error("Element #news-select not found");
}
