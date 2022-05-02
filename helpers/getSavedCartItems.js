const getSavedCartItems = (value) => localStorage.getItem(value);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
