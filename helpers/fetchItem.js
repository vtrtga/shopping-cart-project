const fetchItem = async (itemid) => {
  try {
    const catchApi = await fetch(`https://api.mercadolibre.com/items/${itemid}`);
    const response = await catchApi.json();
    return response;
  } catch (error) {
    return error;
  } 
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}