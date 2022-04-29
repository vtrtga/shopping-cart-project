require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  beforeEach(async () => await fetchProducts('computador'));
  it('Verifica se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toEqual('function')
  });
  it('Verifica se fetch foi chamada com parametro computador', async () => {
    expect(fetch).toHaveBeenCalled();
  });
  
  it('Verifica se ao chamar a função fetchProducts com parametro "computador" a função fetch utiliza o endpoint', async() => {
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verifica se o retorno da função fetchProducts com parametro "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async() => {
    const obj = await fetchProducts('computador');
    expect(obj).toMatchObject(computadorSearch);
  });

  it('verifica se ao chamar a função fetchProducts sem argumento retorna um erro com a mensagem: You must provide an url', async() => {
    const obj = await fetchProducts();
    expect(obj).toEqual(new Error('You must provide an url'));
  });
});
