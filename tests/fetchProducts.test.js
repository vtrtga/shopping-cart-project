require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  test('Verifica se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toEqual('function')
  })
  test('Verifica se fetch foi chamada com parametro computador', () => {
    expect(fetchProducts(computador).toEqual())
  })
  fail('Teste vazio');
});
