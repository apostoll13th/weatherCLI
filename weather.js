#!/usr/bin/env node

import { getArg } from './helpers/getArg.js'
import {printError, printHelp, printSucces, printWeather} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICT} from "./services/storage.service.js";
import {getWeather, getIcon} from "./services/api.service.js";
import {ERROR403, ERROR404} from "./helpers/ErrorConstant.js";


const saveToken = async (token) => {
    if(!token.length){
        printError('Нет токена')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICT.token, token)
        printSucces('Токен Сохранен')
    }catch (e){
        printError(e.message)
    }

}

const saveLatLon = async (lat, lon) => {
    if(!(lat && lon)){
        printError('Мне нужны latitude, longitude, погугли их для своего местоположения')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICT.lat, lat)
        await saveKeyValue(TOKEN_DICT.lon, lon)
        printSucces('Данные вашего местоположения успешно добавлены, можете посмотреть погоду')
    }catch (e){
        printError(e.message)
    }

}

const getForecast = async () => {
   try {
       const weather = await getWeather()
       printWeather(weather, getIcon(weather.fact.condition));


       // это иконки svg возмоно для conky(gnome) подойдет
       // const icon = await axios.get(`https://yastatic.net/weather/i/icons/funky/dark/${weather.fact.icon}.svg`)
       // console.log(icon)



   } catch (e) {
       // Не самая идеальная обработка ошибок, был бы TS мы бы могли проверить на типизацию классов и тп
       if (e?.response?.status == 403){
           printError(ERROR403)
       }
       if (e?.response?.status === 404){
           printError(ERROR404)
       }
       else {
           printError(e.message)
       }
   }


}


const initCLI = () => {
    const arg = getArg(process.argv)
    if(arg.h){
     return  printHelp()
    }
    if(arg.t){
        return saveToken(arg.t)
    }

    if (arg.lat && arg.lon) {
        return saveLatLon(arg.lat, arg.lon)
    }

  return getForecast()

}


initCLI();

