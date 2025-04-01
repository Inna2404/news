const fuelData = [
  { fuel: "A-95", price: 60.15 },
  { fuel: "A-95+", price: 58.25 },
  { fuel: "A-92", price: 60.15 },
  { fuel: "DF", price: 60.15 },
  { fuel: "GAS", price: 60.15 }
];
function populateFuelTable() {
  const fuelTable = document
    .getElementById("fuel-table")
    .getElementsByTagName("tbody")[0];

  fuelData.forEach((fuel) => {
    const row = fuelTable.insertRow();
    row.innerHTML = `
        <td>${fuel.fuel}</td>
        <td>${fuel.price.toFixed(2)}</td>
        `;
  });
}

populateFuelTable();
