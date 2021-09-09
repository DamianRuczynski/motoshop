import './index.scss';
import toggleMenu from '../../js/menu.js';
import { shoppingCart } from '../../js/shopping-cart';
import ajax from '../../js/ajax';
import { worker } from '../../mocks/browser.js';

worker.start({
  onUnhandledRequest: 'bypass',
});

const cartStorageArray = shoppingCart.createLocalStorageObject();

toggleMenu();

const fetchProduct = async (productItem) => {
  const product = await ajax.fetchProducts(
    `/products/${productItem.productId}`
  );
  displayProduct(product, productItem.amount);
  console.log(product);
};

cartStorageArray.forEach((product) => {
  fetchProduct(product);
  console.log(product);
});

const displayProduct = (productItem, amount) => {
  const productList = document.querySelector('.product-list');
  const product = `
    <div class="product">
          <div class="product__info">
            <div class="photo"><img src="${productItem.images[0]}" alt="" /></div>
            <div class="name">
              <p class="product__title">${productItem.name}</p>
            </div>
            <div class="rest">
              <select class="rest__element" name="amout" id="product-amount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <p class="product__price rest__element">$${productItem.price}</p>
              <span class="material-icons rest__element"> delete </span>
            </div>
          </div>
        </div>
  `;
  productList.insertAdjacentHTML('beforeend', product);
};
