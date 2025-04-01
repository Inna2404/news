const filmsContainer = document.getElementById("films-container");

if (filmsContainer) {
  filmsContainer.innerHTML = `
    <div  id="films-section" style="display: none">
        <div id="films"></div>
     </div>
  `;
} else {
  console.error("Element #currency-container not found");
}
