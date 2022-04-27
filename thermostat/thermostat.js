class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = 'on';
  };

  up(degrees) {
    if (this.powerSavingMode === 'on') {
      if (this.temperature + degrees > 25) {
        this.temperature = 25;
        return 'Power saving ON - Maximum temperature = 25';
      } else {
        this.temperature += degrees;
      };
    } else if (this.powerSavingMode = 'off') {
      if (this.temperature + degrees > 32) {
        this.temperature = 32;
        return 'Power saving OFF - Maximum temperature = 32';
      } else {
        this.temperature += degrees;
      };    
    };
  };

  down(degrees) {
    if (this.temperature - degrees < 10) {
      this.temperature = 10;
      return 'Minimum temperature = 10 degress';
    } else {
      this.temperature -= degrees
    };
  };

  togglePowerSaving() {
    if (this.powerSavingMode === 'on') {
      this.powerSavingMode = 'off';
    } else {
      this.powerSavingMode = 'on';
    };
  };

  reset() {
    this.temperature = 20;
  };

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return "Low-usage";
    } else if (this.temperature <= 25) {
      return "Medium-usage";
    } else {
      return "High-usage";
    };
  };
};

module.exports = Thermostat;