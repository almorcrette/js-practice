

class Github {

  constructor(api) {
    this.api = api;
  };

  fetch(repoRoute) {
    this.api.fetchRepositoryData(repoRoute, (response) => { this.data = response });
  };

  getRepoData() {
    return this.data;
  };

};

module.exports = Github;