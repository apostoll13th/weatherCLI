import chalk from 'chalk';

const printSucces = (str) =>  {
  console.log(
`${chalk.black.bgGreen('SUCCESS')} 
${str}
`
  )
}

const printError = (str) => {
  console.log(
    `${chalk.black.bgMagentaBright('ERROR')} 
${str}
`
  )
}


const printHelp = () => {
  console.log(
`${chalk.black.bgMagentaBright('ВНИМАНИЕ')} - Чтобы все работало, тебе нужно будет в личном кабинет разработчика, выбрать тариф погода на вашем сайте, и подождать минут 10-20
пока все подтянется, на этом тарифе у тебя 50 запросов в день доступно
${chalk.black.bgBlueBright('Также')} если показывает не твой город, то установи значения Latitude и Longitude
${chalk.black.bgCyanBright('HELP')}
Без параметров - вывод погоды
${chalk.black.bgGreen('-lat -lon')} ${chalk.black.bgYellowBright('[Значение]')} - для уставки latitude и longitude для точного определения погоды, именно в вашей гео точке
${chalk.black.bgGreen('-t')} ${chalk.black.bgBlueBright('[API_KEY]')} - для сохранения токена
`
  );
}

const printWeather = (res, icon) => {
  console.log(
    `${chalk.black.bgYellow('Погода у вас:')} 
		${icon}
		Температура: ${res.fact.temp} (ощущается как ${res.fact.feels_like})
		Влажность: ${res.fact.humidity}%
		Скорость ветра: ${res.fact.wind_speed}
		Прогноз на 10 дней и на месяц ${res.info.url}
		`
  );
};



export { printHelp, printSucces,printError,printWeather}
