const fetchProducts = () => {
  fetch("https://api.mercadolibre.com/sites/MLB/search?q=$QUERY")
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
