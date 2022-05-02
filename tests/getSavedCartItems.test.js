const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método é chamado'
    , () => {
      saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toHaveBeenCalled();
    })

  it('Teste se, ao executar saveCartItems com o argumento, o localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para getsavedCartItems,'
    , async () => {
      getSavedCartItems('cartItems');
      expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
    });
});
