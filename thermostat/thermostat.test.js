const Thermostat = require('./thermostat');

let myThermostat = new Thermostat();

afterEach(() => {
  myThermostat.temperature = 20;
  myThermostat.powerSavingMode = 'on';
});

test('The Thermostat starts with initial temperature of 20 degrees', () => {
  expect(myThermostat.temperature).toEqual(20);
});

describe('You can increase the temperature with an up method', () => {
  test('use up method to increase by 5 degress', () => {
    myThermostat.up(5);
    expect(myThermostat.temperature).toEqual(25);
  });
});

describe('You can decrese the temperature with a down method', () => {
  test('use down method to decrease by 5 degress', () => {
    myThermostat.down(5);
    expect(myThermostat.temperature).toEqual(15);
  });
});

describe('The minimum possible temperature is 10 degress', () => {
  describe('down from 20 by 12', () => {
    test('down from 20 by 12 will return notification', () => {
      expect(myThermostat.down(12)).toEqual('Minimum temperature = 10 degress');
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
  myThermostat.togglePowerSaving();
  expect(myThermostat.powerSavingMode).toEqual('off');
});

test('Power saving mode can be be turned on after being turned off', () => {
  myThermostat.togglePowerSaving();
  myThermostat.togglePowerSaving();
  expect(myThermostat.powerSavingMode).toEqual('on');
});

describe('Maximum temperatue is 25 if the power saving is on', () => {
  describe('up from 20 by 16 when power saving on', () => {
    test('will return notification', () => {
      expect(myThermostat.up(6)).toEqual('Power saving ON - Maximum temperature = 25');
    });
    test('will set temperature to 25', () => {
      myThermostat.up(6);
      expect(myThermostat.temperature).toEqual(25);
    });
  });
});