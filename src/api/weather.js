export default async function handler(req, res) {
  const { city } = req.query;
  const API_KEY = process.env.WEATHER_API_KEY;

  if (!API_KEY || !city) {
    return res.status(400).json({ error: "Missing API key or city" });
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=uk`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
}
