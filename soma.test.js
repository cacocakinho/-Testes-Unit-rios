// soma.test.js
const soma = require('./soma');

test('retorna a soma de dois números', () => {
  expect(soma(1, 2)).toBe(3);
});
