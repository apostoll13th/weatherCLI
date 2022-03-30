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
`${chalk.black.bgCyanBright('HELP')}
Без параметров - вывод погоды
-s ${chalk.black.bgYellowBright('[CITY]')} - для уставки города
-h для вызова MAN
-t ${chalk.black.bgBlueBright('[API_KEY]')} - для сохранения токена
`
  );
}

export { printHelp, printSucces,printError }