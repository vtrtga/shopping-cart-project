require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const saveCartItems = require('../helpers/saveCartItems');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('Verifica se a função fetch é chamada com o argumento "computador" ', async () => {
    const response = await fetchItem('computador');
    expect(fetch).toReturn();
  })

  it('Verifica se a função fetch é chamada com o endpoint, ao usar o argumento computador', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetchItem('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
    const obj = await fetchItem('MLB1615760527');
    expect(obj).toMatchObject(item);
  });
});
