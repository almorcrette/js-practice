const ShoppingBasket = require("./shoppingbasket");

let basket = new ShoppingBasket();
let anotherBasket = new ShoppingBasket();
let thirdBasket = new ShoppingBasket();

const candyDouble = {
  getName: () => 'Mars',
  getPrice: () => 4.99
};
const anotherCandyDouble = {
  getName: () => 'Skittle',
  getPrice: () => 3.99
};

anotherBasket.addItem(candyDouble);

thirdBasket.addItem(candyDouble);
thirdBasket.addItem(anotherCandyDouble);
thirdBasket.addItem(anotherCandyDouble);

describe('#getTotalPrice', () => {
  describe('returns the total price of the basket', () => {
    test('initially returns 0 because the basket is empty', () => {
      expect(basket.getTotalPrice()).toEqual(0)
    });
    test('returns the price of the only item in the basket', () => {
      expect(anotherBasket.getTotalPrice()).toEqual(4.99)
    });
    test('returns the total price of all items in basket', () => {
      expect(thirdBasket.getTotalPrice()).toEqual(12.97)
    });
  })
})

describe('#addItem', () => {
  it('adds an item to the basket', () => {
    expect(anotherBasket.basket).toContain(candyDouble)
  });
  
  it('has undefined return value', () => {
    expect(anotherBasket.basket).toBeUndefined
  })
})