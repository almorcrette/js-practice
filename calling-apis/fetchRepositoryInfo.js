const got = require('got');

const fetchRepositoryInfo = (repo, callbackFunction) => {
  got(`https://api.github.com/repos/${repo}`).then( (response) => {
    callbackFunction(
      JSON.parse(response.body)
    );
  });
};

module.exports = fetchRepositoryInfo;