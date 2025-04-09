const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 5000;

require("dotenv").config();

const API_KEY = process.env.API_KEY;
app.get("/api/news", (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data from News API");
      }
      return response.json();
    })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
