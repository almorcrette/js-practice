const uppercaseMesage = (message) => {
  return message.toUpperCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("Hello", uppercaseMesage);


// Exercise 2

const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform_1 = (message, transformFunction) => {
  console.log(transformFunction(message));
}


transform_1("WHY ARE YOU SHOUTING?", lowercaseMessage)
