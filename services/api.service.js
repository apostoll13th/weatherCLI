import axios from 'axios'
import {getKeyValue, TOKEN_DICT} from "./storage.service.js";


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

export { getWeather }


