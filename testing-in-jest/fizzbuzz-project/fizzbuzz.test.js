const fizzBuzz = require('./fizzbuzz')

describe('fizzBuzz', () => {
  it("returns 'Fizz' if the number is divisible by 3 but not 5", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  }),
  it("returns 'Buzz' if the number is divisible by 5 but not 3", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  }),
  it("returns 'FizzBuzz' if the number is divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  }),
  it("returns the number if it is not divisible by either 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4);
  })
});