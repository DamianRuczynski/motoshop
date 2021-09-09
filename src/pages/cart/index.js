import './index.scss';
import toggleMenu from '../../js/menu.js';
import { shoppingCart } from '../../js/shopping-cart';
import ajax from '../../js/ajax';
import { worker } from '../../mocks/browser.js';

window.deleteFromCart = shoppingCart.deleteFromCart;

worker.start({
  onUnhandledRequest: 'bypass',
});

const cartStorageArray = shoppingCart.createLocalStorageObject();

toggleMenu();

const fetchProduct = async (productItem) => {
  const product = await ajax.fetchProducts(
    `/products/${productItem.productId}`
  );
  displayProduct(product, productItem.id);

  shoppingCart.updateTotalPrice(product.price);
};

cartStorageArray.forEach((product) => {
  fetchProduct(product);
  console.log(product);
});

const displayProduct = (productItem, localStorageProductId) => {
  const productList = document.querySelector('.product-list');
  const product = `
    <div class="product" id=${productItem.id}>
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
              <span onclick="deleteFromCart(${productItem.id},${productItem.price})" class="material-icons rest__element trash-icon"> delete </span>
            </div>
          </div>
        </div>
  `;
  productList.insertAdjacentHTML('beforeend', product);
};
