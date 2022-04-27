const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
};

const nameOnly = (candy) => {
  return candy.name;
};

const namesOnly = (searchReturn) => {
  return searchReturn.map(nameOnly);
};

const searchCandies = (searchCriteria, maxPrice) => {
  let searchCiteriaCapFirst = capitalizeFirst(searchCriteria);
  let searchReturn =  candies.filter(
    (candy) => {
      if ( (candy.price <= maxPrice) && (candy.name.startsWith(searchCiteriaCapFirst)) ) {
        return true;
      } else {
        return false;
      }
    }
  );
  return namesOnly(searchReturn);
};

module.exports = {
  capitalizeFirst,
  nameOnly,
  namesOnly,
  searchCandies,
}