const hello = require('../src/hello');

test('say "Hello world!"', () => {
  expect(hello()).toBe('Hello world!');
});
