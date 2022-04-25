const printHello = () => {
  console.log('Hi there, welcome to Makers!');
};

setTimeout(printHello, 3000);

setTimeout(() => {
  console.log('Another greeting!');
}, 6000);

const executeAfterDelay = (seconds, funk) => {
  let milliseconds = seconds * 1000;
  return setTimeout(funk, milliseconds);
};

executeAfterDelay(5, printHello)