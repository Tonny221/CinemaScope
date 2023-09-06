/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    options: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4bb7604d9amshb898be1d7913227p13ae2fjsn2e01ffb4801e",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    },
    url: "https://moviesdatabase.p.rapidapi.com"
  },
};

module.exports = nextConfig;
