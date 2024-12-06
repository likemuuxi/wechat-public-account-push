/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    "APP_ID":"wx72eb1cb4e238912a",
    "APP_SECRET":"a681ffbb7521ac6d7e82ab8878c52019",
    "IS_SHOW_COLOR":true,
    "CALLBACK_TEMPLATE_ID":"e6aaIKZwdluotRKixw9f3QLjtk_3rdmhibJuM-1r5Fg",
    "CALLBACK_USERS":[{"name":"自己","id":"owfZP6_KtLtt_HdFzhTqIlhACtUA"}],
    "TIAN_API": {"key": "15aa98b3097d2a2f3314d557d962039b"},

    "USERS":[
    {
      "name":"小楠",
      "id":"owfZP6wAmo7T4iX6AUGIsI6mRPQA",
      "useTemplateId":"0zbylnCR3eteoVwITKtLNnCR5pisbmJ7wmroU0r8shA",
      "province":"福建省",
      "city":"厦门市",
      "horoscopeDate":"05-26",
      "horoscopeDateType":"今日",
      "openUrl":"https://www.muuxi.cn/",
      "festivals":[
        {
          "type":"节日",
          "name":"情人节",
          "date":"02-14",
          "year":"2025"
        }],
     "customizedDateList":[
       {"keyword":"meet_day","date":"2022-09-16"},
       {"keyword":"love_day","date":"2022-10-09"}]
    }],
    "SWITCH":{
      "weather":true,
      "holidaytts":true,
      "CIBA":true,
      "oneTalk":true,
      "earthyLoveWords":true,
      "momentCopyrighting":true,
      "poisonChickenSoup":true,
      "poetry":true,
      "horoscope":true,
      "birthdayMessage":true,
      "morningGreeting":true
  }
}

module.exports = USER_CONFIG
