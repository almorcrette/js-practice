// Load the `got` function.
const got = require('got');

// Create a "handler" callback function.
const handleReceivedResponse = (response) => {
  console.log(JSON.parse(response.body));
};

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call `got` and provide the handler callback function.
// This will get called by `got` when the response is received.
got(url).then(handleReceivedResponse);