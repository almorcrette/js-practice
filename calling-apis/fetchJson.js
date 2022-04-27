// Load the `got` function.
const got = require('got');

const fetchJson = (url, callbackFunction) => {
  got(url).then( (response) => {
    callbackFunction(
      JSON.parse(response.body)
    );
  });
};

module.exports = fetchJson;