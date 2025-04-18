export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY;
  const NEWS_URL = process.env.NEWS_URL;

  const url = `${NEWS_URL}${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(news);

  res.status(200).json(data);
}
