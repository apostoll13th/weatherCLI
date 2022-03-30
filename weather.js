#!/usr/bin/env node

import { getArg } from './helpers/getArg.js'
import {printError, printHelp, printSucces} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICT} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";
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

const getForecast = async () => {
   try {
       const weather = await getWeather()
       console.log(weather)
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
      printHelp()
    }
    if(arg.s){

    }
    if(arg.t){
        return saveToken(arg.t)
    }
    getForecast()
}


initCLI();

