document.addEventListener("DOMContentLoaded", () => {
  const adsContainers = document.querySelectorAll("#ads_block_container");

  if (adsContainers.length === 0) {
    console.error("#ads_block_container not found");
    return;
  }

  adsContainers.forEach((adsContainer) => {
    adsContainer.innerHTML = `
    <div class="ad_block">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur recusandae facilis voluptate quia consequatur
        reiciendis. Alias, nihil! Officia sit, ex, earum suscipit
        dicta molestias consequatur perspiciatis
      </p>
      <h3>Your ad can be here</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum quas eligendi ab quis doloribus ex, nostrum atque
      </p>
    </div>

    <div class="ad_block_small">
      <h3>Your ad can be here</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum quas eligendi ab quis doloribus ex, nostrum atque
      </p>
    </div>

    <div class="ad_block">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur recusandae facilis voluptate quia consequatur
        reiciendis. Alias, nihil! Officia sit, ex, earum suscipit
        dicta molestias consequatur perspiciatis
      </p>
      <h3>Your ad can be here</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum quas eligendi ab quis doloribus ex, nostrum atque
      </p>
    </div>

    <div class="ad_block_small">
      <h3>Your ad can be here</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum quas eligendi ab quis doloribus ex, nostrum atque
      </p>
    </div>
  `;
  });
});
