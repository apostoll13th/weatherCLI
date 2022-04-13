import axios from 'axios'
import {getKeyValue, TOKEN_DICT} from "./storage.service.js";

const getIcon = (icon) => {
  switch (icon) {
    case 'clear13':
      return '☀️';
    case 'cloudy':
      return '🌤️';
    case 'partly-cloudy':
      return '🌤️';
    case 'overcast':
      return '☁☁☁';
    case 'light-rain':
      return '🌧️';
    case 'drizzle':
      return '🌧️';
    case 'rain':
      return '🌧️';
    case 'moderate-rain':
      return '🌧️';
    case 'heavy-rain':
      return '🌧️🌧️🌧️';
    case 'continuous-heavy-rain':
      return '🌧️🌧️🌧️';
    case 'showers':
      return '🌧️🌧️🌧🌧️🌧️🌧️️';
    case 'wet-snow ':
      return '❄->🌧️';
    case 'thunderstorm-with-rain':
      return '🌩️';
    case 'hail':
      return 'Град брат';
    case 'thunderstorm-with-hail':
      return '🌩️🌫❄';
    case 'light-snow':
      return '❄️';
    case 'snow':
      return '❄️';
    case 'snow-showers':
      return '❄️';
  }
};


const getWeather = async () => {
  const token = await getKeyValue(TOKEN_DICT.token)
  const lat  = await  getKeyValue(TOKEN_DICT.lat)
  const lon = await  getKeyValue(TOKEN_DICT.lon)
  if (!token) {
    throw new Error('Не задан ключ API, задайте через команду -t [API_KEY]')
  }

  const { data } = await  axios.get('https://api.weather.yandex.ru/v2/informers', {
    params: {
      lat,
      lon,
    },
    headers: {
      'X-Yandex-API-Key':token
    }

  })
  return data
}

export { getWeather, getIcon }


