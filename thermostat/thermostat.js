class Thermostat {
  constructor() {
    this.temperature = 20;
  };

  up(degrees) {
    this.temperature += degrees
  };

  down(degrees) {
    if (this.temperature - degrees < 10) {
      this.temperature = 10;
      return 'Minimum temperature = 10 degress'
    } else {
      this.temperature -= degrees
    }
  };
};

module.exports = Thermostat;