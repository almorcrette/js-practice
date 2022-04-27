const Thermostat = require('./thermostat');

let myThermostat = new Thermostat();

afterEach(() => {
  myThermostat.temperature = 20;
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

describe('The minimum possible tempoerature is 10 degress', () => {
  test('down from 20 by 12 will return notification', () => {
    expect(myThermostat.down(12)).toEqual('Minimum temperature = 10 degress');
  });
  test('down from 20 by 12 will set temperature to 10', () => {
    myThermostat.down(12);
    expect(myThermostat.temperature).toEqual(10);
  });
});