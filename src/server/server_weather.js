app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY_WEATHER;

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Weather fetch failed" });
  }
});
