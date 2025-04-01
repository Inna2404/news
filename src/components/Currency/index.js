const currencyContainer = document.getElementById("currency-container");

if (currencyContainer) {
  currencyContainer.innerHTML = `
      <div class="currency" id="currency-section" style="display: none">
              <div class="currency-container">
                <div class="currency-container_wrap">
                  <table id="currency-table">
                    <thead>
                      <tr class="currency_list">
                        <th>Currency</th>
                        <th>Purchase</th>
                        <th>Selling</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                  <div class="currency-container_img"></div>
                </div>
                <h3 class="currency-converter_title">Currency converter</h3>
                <div class="currency-converter">
                  <div class="currency-converter_block-wrapper">
                    <div class="currency-converter_block">
                      <p class="currency-converter_block_p">uah</p>
                      <input type="number" id="uah" style="width: 90px" />
                    </div>
                    <div class="currency-converter_block">
                      <p class="currency-converter_block_p">pln</p>
                      <p id="pln-rate-display"></p>
                      <input type="number" id="pln-rate" style="width: 50px" />
                    </div>
                  </div>
                  <div class="currency-converter_block-wrapper">
                    <div class="currency-converter_block">
                      <p class="currency-converter_block_p">usd</p>
                      <p id="usd-rate-display"></p>
                      <input type="number" id="usd-rate" style="width: 50px" />
                    </div>
                    <div class="currency-converter_block">
                      <p class="currency-converter_block_p">eur</p>
                      <p id="eur-rate-display"></p>
                      <input type="number" id="eur-rate" style="width: 50px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
} else {
  console.error("Element #currency-container not found");
}
