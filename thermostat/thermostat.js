class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = 'on';
  };

  getTemperature() {
    return this.temperature;
  };

  up(degrees = 1) {
    if (this.powerSavingMode === 'on') {
      if (this.temperature + degrees > 25) {
        this.temperature = 25;
        console.log('Power saving ON - Maximum temperature = 25');
      } else {
        this.temperature += degrees;
      };
    } else if (this.powerSavingMode = 'off') {
      if (this.temperature + degrees > 32) {
        this.temperature = 32;
        console.log('Power saving OFF - Maximum temperature = 32');
      } else {
        this.temperature += degrees;
      };    
    };
    return this.temperature;
  };

  down(degrees = 1) {
    if (this.temperature - degrees < 10) {
      this.temperature = 10;
      console.log('Minimum temperature = 10 degress');
    } else {
      this.temperature -= degrees;
    };
    return this.temperature;
  };

  setPowerSaving(instruction) {
    if (instruction === false) {
      this.powerSavingMode = 'off';
      console.log('PSM is now off, max temperature is 32');
    } else {
      this.powerSavingMode = 'on';
      console.log('PSM is now on, max temperature is 25');
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