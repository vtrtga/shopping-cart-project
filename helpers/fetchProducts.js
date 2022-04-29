const fetchProducts = async (arg) => {
  try {
    const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${arg}`);
    const response = await resultado.json();
    return response.results;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}