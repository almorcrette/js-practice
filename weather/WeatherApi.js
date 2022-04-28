const got = require("got");
const apiKey = require('./apiKey');

class WeatherApi {

  constructor() {
    this.apiKey = apiKey;
  }

  fetchWeatherData(city, callback) {
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl).then(
      (response) => callback(JSON.parse(response.body))
    );
  };

};

module.exports = WeatherApi;