const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const createMessage = (customer_name) => {
  return `Hi ${customer_name}! 50% off our best candies for you today!`;
}

const generateMessages = (array_of_names) => {
  return array_of_names.map(createMessage);
}


module.exports = {
  names,
  generateMessages,
  createMessage,
}