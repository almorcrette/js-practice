class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach( (x) => {
      totalPrice += x.getPrice();
    })
    return totalPrice;
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;