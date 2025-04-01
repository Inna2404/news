const fuelContainer = document.getElementById("fuel-container");

if (fuelContainer) {
  fuelContainer.innerHTML = `
            <div class="fuel" id="fuel-section" style="display: none">
              <div class="fuel_wrapper">
                <table id="fuel-table">
                  <thead>
                    <tr>
                      <th class="fuel-list">Пальне</th>
                      <th>Середня</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <div class="fuel_img"></div>
              </div>
            </div>
    `;
} else {
  console.error("Element #fuel-container not found");
}
