const apiUrl =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent("https://api.privatbank.ua/p24api/pubinfo?json&exchange");

const PLN_TO_UAH = 10.3;
async function getCurrency() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return;
    }

    const data = await response.json();
    const dsts = JSON.parse(data.contents);

    if (!dsts || dsts.length === 0) {
      console.error("No data received from the API");
      return;
    }

    const currencyTable = document
      .getElementById("currency-table")
      .getElementsByTagName("tbody")[0];

    currencyTable.innerHTML = "";

    dsts.forEach((rate) => {
      const row = currencyTable.insertRow();
      row.innerHTML = `
        <td class = "currency_list_row">${rate.ccy}</td>
        <td class = "currency_list_row">${rate.buy}</td>
        <td class = "currency_list_row">${rate.sale}</td>
      `;
    });

    const rates = {
      USD: parseFloat(dsts.find((rate) => rate.ccy === "USD")?.buy || 1),
      EUR: parseFloat(dsts.find((rate) => rate.ccy === "EUR")?.buy || 1),
      PLN: 0
    };

    const usdParagraph = document.getElementById("usd-rate-display");
    if (typeof rates.USD === "string") {
      rates.USD = parseFloat(rates.USD);
    }
    if (typeof rates.USD === "number" && !isNaN(rates.USD)) {
      usdParagraph.textContent = `${rates.USD.toFixed(2)}`;
    } else {
      console.error("rates.USD is not a valid number", rates.USD);
    }

    const plnParagraph = document.getElementById("pln-rate-display");
    if (plnParagraph) {
      plnParagraph.textContent = `${PLN_TO_UAH.toFixed(2)}`;
    }

    const eurParagraph = document.getElementById("eur-rate-display");
    if (typeof rates.EUR === "string") {
      rates.EUR = parseFloat(rates.EUR);
    }
    if (typeof rates.EUR === "number" && !isNaN(rates.EUR)) {
      eurParagraph.textContent = `${rates.EUR.toFixed(2)}`;
    } else {
      console.error("rates.EUR is not a valid number", rates.EUR);
    }

    document.getElementById("uah").addEventListener("input", function () {
      const uahAmount = parseFloat(this.value) || 0;

      console.log("UAH Amount:", uahAmount);

      document.getElementById("pln-rate").value = (
        uahAmount / PLN_TO_UAH
      ).toFixed(2);

      document.getElementById("usd-rate").value = (
        uahAmount / rates.USD
      ).toFixed(2);

      document.getElementById("eur-rate").value = (
        uahAmount / rates.EUR
      ).toFixed(2);
    });

    document.getElementById("usd-rate").addEventListener("input", function () {
      const usdAmount = parseFloat(this.value) || 0;

      console.log("USD Amount:", usdAmount);

      document.getElementById("uah").value = (usdAmount * rates.USD).toFixed(2);

      document.getElementById("pln-rate").value = (
        (usdAmount * rates.USD) /
        PLN_TO_UAH
      ).toFixed(2);

      document.getElementById("eur-rate").value = (
        (usdAmount * rates.USD) /
        rates.EUR
      ).toFixed(2);
    });

    document.getElementById("eur-rate").addEventListener("input", function () {
      const eurAmount = parseFloat(this.value) || 0;

      console.log("USD Amount:", eurAmount);

      document.getElementById("uah").value = (eurAmount * rates.EUR).toFixed(2);

      document.getElementById("pln-rate").value = (
        (eurAmount * rates.EUR) /
        PLN_TO_UAH
      ).toFixed(2);

      document.getElementById("usd-rate").value = (
        (eurAmount * rates.EUR) /
        rates.USD
      ).toFixed(2);
    });

    document.getElementById("pln-rate").addEventListener("input", function () {
      const plnAmount = parseFloat(this.value) || 0;

      console.log("USD Amount:", plnAmount);

      document.getElementById("uah").value = (plnAmount * PLN_TO_UAH).toFixed(
        2
      );

      document.getElementById("eur-rate").value = (
        (plnAmount * PLN_TO_UAH) /
        rates.EUR
      ).toFixed(2);

      document.getElementById("usd-rate").value = (
        (plnAmount * PLN_TO_UAH) /
        rates.USD
      ).toFixed(2);
    });
  } catch (error) {
    console.error("Error fetching currency", error);
  }
}

getCurrency();
