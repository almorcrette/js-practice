class Weather {
  
  constructor(api) {
    this.api = api;
  };

  fetch(city) {
    this.api.fetchWeatherData(
      city,
      (response) => { this.data = response }
    );
  };

  getWeatherData() {
    return this.data;
  };

}

module.exports = Weather;