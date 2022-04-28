const GithubApi = require('./githubApi')

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}

const api = new GithubApi();

const mockCallback = (input) => {
  return 'This is the output of testCallback';
};

const callback = (data) => {
  console.log(data);
};


// "it fetches repository data from Github's API"
test('the data is peanut butter', () => {
  return api.fetchRepositoryData('sinatra/sinatra', expect(data).toBe('https://api.github.com/repos/sinatra/sinatra')
  });
});

// test("calls the given callback with the received data", () => {
//   expect(api.fetchRepositoryData('sinatra/sinatra', mockCallback)).toEqual('This is the output of testCallback');
// });

api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
  return repositoryData;
});
