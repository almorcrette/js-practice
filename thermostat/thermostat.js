class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = 'on';
  };

  up(degrees) {
    this.temperature += degrees;
  };

  down(degrees) {
    if (this.temperature - degrees < 10) {
      this.temperature = 10;
      return 'Minimum temperature = 10 degress'
    } else {
      this.temperature -= degrees
    }
  };

  togglePowerSaving() {
    if (this.powerSavingMode === 'on') {
      this.powerSavingMode = 'off';
    } else {
      this.powerSavingMode = 'on';
    };
  };
};

module.exports = Thermostat;