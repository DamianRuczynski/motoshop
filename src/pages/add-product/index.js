import './index.scss';
import ProductCard from '../../js/product-card.js';
import toggleMenu from '../../js/menu';

toggleMenu();

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const imageContainer = document.querySelector('.product-card__images');

const productCard = new ProductCard(imageContainer.childElementCount);

leftArrow.addEventListener('click', () =>
  productCard.handleLeftArrowClick(imageContainer)
);
rightArrow.addEventListener('click', () =>
  productCard.handleRightArrowClick(imageContainer)
);
