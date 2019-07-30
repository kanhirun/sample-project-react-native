require('babel-polyfill');

const detox = require('detox');
const config = require('../package.json').detox;

// Set the default timeout
jest.setTimeout(60000);

beforeAll(async () => {
  await detox.init(config);
});

afterAll(async () => {
  await detox.cleanup();
});
