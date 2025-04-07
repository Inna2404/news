const fs = require("fs");
require("dotenv").config();

const config = `
const CONFIG = {
  API_KEY: "${process.env.API_KEY}",
  API_KEY_FILMS: "${process.env.API_KEY_FILMS}",
  API_KEY_WEATHER: "${process.env.API_KEY_WEATHER}"
};

export default CONFIG;
`;
fs.writeFileSync("./src/config.js", config);
console.log("config.js created!");
