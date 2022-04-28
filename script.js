function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const getApiItemById = async (productid) => {
  const { id, title, price } = await fetchItem(`${productid}`);
  const objeto = {
    sku: id,
    name: title,
    salePrice: price,
  };
  document.querySelector('.cart__items').appendChild(createCartItemElement(objeto));
};

const getItem = (event) => {
  const getTarget = event.target.parentNode;
  const targetId = getTarget.firstChild.innerText;
  getApiItemById(targetId);
};

const implementProductsList = async () => {
  const pegaItems = document.querySelector('.items');
  const computador = await fetchProducts('computador');
  return computador.forEach((product) => {
    const result = createProductItemElement({
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    });
    pegaItems.appendChild(result);
    const buttonId = document.querySelectorAll('.item__add');
    buttonId.forEach((button) => {
      button.addEventListener('click', getItem);
  });
  });
};
implementProductsList();
window.onload = async () => {
await implementProductsList();
await sumPrices;
};
