const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  
  it('Verifica se ao executar saveCartItems com o argumento <ol><li>Item</li></ol> localStorage.setItem é chamado;', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
    });

  it('Verifica se ao executar saveCartItems com o parametro <ol><li>Item</li></ol> localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
