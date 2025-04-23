export default async function handler(req, res) {
  const API_KEY_WEATHER = process.env.API_KEY_WEATHER;
  const WEATHER_URL = process.env.WEATHER_URL;

  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "city is required" });
  }

  const url = `${WEATHER_URL}?key=${API_KEY_WEATHER}&q=${city}`;

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(news);

  res.status(200).json(data);
}
