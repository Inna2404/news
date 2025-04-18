export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(news);

  res.status(200).json(data);
}
