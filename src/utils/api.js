// 4. API Utility - src/utils/api.js
import axios from 'axios';

export const getWeatherData = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
  return response.data;
};

export const getCryptoData = async (cryptos) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptos}&vs_currencies=usd`);
  return response.data;
};