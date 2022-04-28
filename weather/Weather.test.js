const Weather = require('./Weather');

describe('Weather', () => {
  it('gets the repo data fetched by the Api class', () => {

    const mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          weather: [
            {
              main: 'Clouds',
            }
          ],
          main: {
            temp: 12.9
          }
        });
      }
    }

    const weather = new Weather(mockedApi);

    weather.fetch('Ipswich');

    expect(weather.getWeatherData()).toEqual({
      weather: [
        {
          main: 'Clouds',
        }
      ],
      main: {
        temp: 12.9
      }
    });

  });
});