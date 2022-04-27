class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach( (x) => {
      totalPrice += x.getPrice();
    })
    return totalPrice - this.discount;
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;