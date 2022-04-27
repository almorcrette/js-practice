const Thermostat = require('./thermostat');

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}

let myThermostat = new Thermostat();

afterEach(() => {
  myThermostat.temperature = 20;
  myThermostat.powerSavingMode = 'on';
});

test('#getTemperature methods returns the current temperature setting', () => {
  expect(myThermostat.getTemperature()).toEqual(20);
});

test('The Thermostat starts with initial temperature of 20 degrees', () => {
  expect(myThermostat.temperature).toEqual(20);
});

describe('You can increase the temperature with an up method', () => {
  test('use up method to increase by 5 degress', () => {
    myThermostat.up(5);
    expect(myThermostat.temperature).toEqual(25);
  });
  test('using up method should return new temperature', () => {
    expect(myThermostat.up(5)).toEqual(25);
  });
});

describe('You can decrese the temperature with a down method', () => {
  test('use down method to decrease by 5 degress', () => {
    myThermostat.down(5);
    expect(myThermostat.temperature).toEqual(15);
  });
  test('using down method should return new temperature', () => {
    expect(myThermostat.down(5)).toEqual(15);
  });
});

describe('The minimum possible temperature is 10 degress', () => {
  describe('down from 20 by 12', () => {
    test('down from 20 by 12 will return notification', () => {
      myThermostat.down(12);
      expect(global.console.log).toHaveBeenCalledWith('Minimum temperature = 10 degress');
    });
    test('down from 20 by 12 will set temperature to 10', () => {
      myThermostat.down(12);
      expect(myThermostat.temperature).toEqual(10);
    });
  });
});

test('Power saving mode on by default', () => {
  expect(myThermostat.powerSavingMode).toEqual('on');
});

test('Power saving mode can be turned off', () => {
  myThermostat.setPowerSaving(false);
  expect(global.console.log).toHaveBeenCalledWith('PSM is now off, max temperature is 32');
  expect(myThermostat.powerSavingMode).toEqual('off');
});

test('Power saving mode can be be turned on after being turned off', () => {
  myThermostat.setPowerSaving(false);
  myThermostat.setPowerSaving(true);
  expect(global.console.log).toHaveBeenCalledWith('PSM is now on, max temperature is 25');
  expect(myThermostat.powerSavingMode).toEqual('on');
});

describe('Maximum temperatue is 25 if the power saving is on', () => {
  describe('up from 20 by 16 when power saving on', () => {
    test('will return notification', () => {
      myThermostat.up(6);
      expect(global.console.log).toHaveBeenCalledWith('Power saving ON - Maximum temperature = 25');
    });
    test('will set temperature to 25', () => {
      myThermostat.up(6);
      expect(myThermostat.temperature).toEqual(25);
    });
  });
});

describe('Maximum temperature is 32 if power saving is off', () => {
  describe('up from 20 by 13 when power saving is off', () => {
    test('will return notification', () => {
      myThermostat.setPowerSaving(false);
      myThermostat.up(13)
      expect(global.console.log).toHaveBeenCalledWith('Power saving ON - Maximum temperature = 25');
    });
    test('will set temperature to 32', () => {
      myThermostat.setPowerSaving(false);
      myThermostat.up(13)
      expect(myThermostat.temperature).toEqual(32);
    });
  });
});

test('Reset temperature to 20 with reset method', () => {
  myThermostat.up(5);
  myThermostat.reset();
  expect(myThermostat.temperature).toEqual(20);
});

describe('Check current energy usage', () => {
  describe('<18 is low-usage', () => {
    test('17 returns low-usage', () => {
      myThermostat.temperature = 17;
      expect(myThermostat.currentEnergyUsage()).toEqual('Low-usage');
    });
  });
  describe('<=25 is medium-usage', () => {
    test('18 returns low-usage', () => {
      myThermostat.temperature = 18;
      expect(myThermostat.currentEnergyUsage()).toEqual('Medium-usage');
    });
    test('24 returns low-usage', () => {
      myThermostat.temperature = 24;
      expect(myThermostat.currentEnergyUsage()).toEqual('Medium-usage');
    });
  });
  describe('>25 is high-usage', () => {
    test('26 returns low-usage', () => {
      myThermostat.temperature = 26;
      expect(myThermostat.currentEnergyUsage()).toEqual('High-usage');
    });
  });
})