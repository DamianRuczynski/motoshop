import './index.scss';

import { worker } from '../../mocks/browser.js';

import toggleMenu from '../../js/menu';
import ajax from '../../js/ajax.js';
import { setSingleProductCard } from '../../js/product-card.js';
import { templates } from '../../js/templates.js';
import { shoppingCart } from '../../js/shopping-cart';

worker.start({
  onUnhandledRequest: 'bypass',
});

shoppingCart.createLocalStorageObject();
toggleMenu();

(async () => {
  const main = document.querySelector('main');

  const searchParams = Object.fromEntries(
    new URLSearchParams(location.search).entries()
  );

  try {
    const product = await ajax.fetchProducts(`/products/${searchParams.id}`);

    main.classList.remove('main--load');
    main.innerHTML = templates.generateProductCardDetails(product);

    setSingleProductCard();
  } catch (err) {
    main.innerHTML = '<p>Product not found</p>';
  }
})();
