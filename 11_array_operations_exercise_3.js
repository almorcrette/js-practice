const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const createMessage = (customer_object) => {
  return `Hi ${customer_object['name']}! ${customer_object['discount']}% off our best candies for you today!`;
}

const generateMessages = (array_of_objects) => {
  return array_of_objects.map(createMessage);
}


module.exports = {
  generateMessages,
  createMessage,
  namesAndDiscounts,
}