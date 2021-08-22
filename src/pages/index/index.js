import './index.scss';

import toggleMenu from '../../js/menu.js';
import ProductCard from '../../js/product-card.js';

toggleMenu();

const imagesContainers = document.querySelectorAll('.product-card__images');
const productCardLinks = document.querySelectorAll('.product-card__link');

// prevent default anchor tag behavior when arrow is clicked
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