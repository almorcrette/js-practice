const got = require("got");

class GithubApi {
  fetchRepositoryData(repoRoute, callback) {
    let github = 'https://api.github.com/repos/';
    let url = github.concat(route)
    got(url).then(
      (response) => callback(JSON.parse(response.body)));
  };
};

module.exports = GithubApi;