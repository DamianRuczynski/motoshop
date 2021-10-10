import './index.scss';

import { worker } from '../../mocks/browser.js';

import toggleMenu from '../../js/menu.js';
import ajax from '../../js/ajax.js';
import ProductCard from '../../js/product-card.js';
import { templates } from '../../js/templates.js';
import { shoppingCart } from '../../js/shopping-cart';

worker.start({
  onUnhandledRequest: 'bypass',
});

shoppingCart.createLocalStorageObject();
toggleMenu();

const preventArrowClickRedirection = () => {
  const productCardLinks = document.querySelectorAll('.product-card__link');

  productCardLinks.forEach((productCardLink) => {
    productCardLink.addEventListener('click', (event) => {
      if (
        event.target.classList.contains('arrow-left') ||
        event.target.classList.contains('arrow-right')
      ) {
        event.preventDefault();
      }
    });
  });
};

const setupProductCardCarousels = () => {
  const imagesContainers = document.querySelectorAll('.product-card__images');

  imagesContainers.forEach((imageContainer) => {
    const leftArrows =
      imageContainer.parentElement.querySelectorAll('.arrow-left');
    const rightArrows =
      imageContainer.parentElement.querySelectorAll('.arrow-right');

    const productCard = new ProductCard(imageContainer.childElementCount);

    productCard.disableArrows([...leftArrows, ...rightArrows]);

    leftArrows.forEach((leftArrow) => {
      leftArrow.addEventListener('click', () => {
        productCard.handleLeftArrowClick(imageContainer);
      });
    });

    rightArrows.forEach((rightArrow) => {
      rightArrow.addEventListener('click', () => {
        productCard.handleRightArrowClick(imageContainer);
      });
    });
  });
};

(async () => {
  const products = await ajax.fetchProducts('/products');

  const grid = document.querySelector('.grid');
  grid.classList.remove('grid--load');
  if (products.length === 0) grid.classList.add('grid--load-fail');
  grid.innerHTML = templates.generateProductCards(products);

  preventArrowClickRedirection();
  setupProductCardCarousels();
})();
