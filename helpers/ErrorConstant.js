const ERROR403 = `
Возможные причины:

В заголовке запроса отсутствует ключ доступа к API.
Убедитесь, что в запросе указан заголовок X-Yandex-API-Key с полученным ключом доступа.

Запрос отправлен на некорректный URL.
Url запроса зависит от выбранного тарифа.

Для тарифа:

«Погода на вашем сайте» — https://api.weather.yandex.ru/v2/informers/.
«Тестовый» — https://api.weather.yandex.ru/v2/forecast/.
Истек срок действия тарифа.
Срок действия тарифа «Тестовый» — 30 дней. Если вам необходимо продлить действие данного тарифа, напишите нам.

Превышен лимит запросов.
Тарифы «Тестовый» и «Погода на Вашем сайте» имеют суточное ограничение на количество запросов. Чтобы продолжить пользоваться API, смените тариф или дождитесь начала новых суток.
`

const ERROR404 = `
Населенный пункт указывается при помощи значений широты (параметр lat) и долготы (параметр lon). 
Укажите их через флаг -s lat=ЗНАЧЕНИЕ lon=ЗНАЧЕНИЕ подробней где узнать lat и lon можно 
на яндекс погоде указав ваш город
`


export { ERROR403, ERROR404 }