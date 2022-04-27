const Candy = require("./candy");

let candy = new Candy('Mars', 4.99)

test('#getName returns the name of the candy', () => {
  expect(candy.getName()).toEqual('Mars')
});

test('#getPrice returns the price of the candy', () => {
  expect(candy.getPrice()).toEqual(4.99)
});
