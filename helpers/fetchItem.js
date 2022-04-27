const fetchItem = async (itemid) => {
  const items = await fetch(`https://api.mercadolibre.com/items/${itemid}`)
  .then((response) => response.json())
  .catch((err) => console.log(err));
  return items;
};

fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
