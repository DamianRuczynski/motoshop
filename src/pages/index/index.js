import './index.scss';
import ProductCard from '../../js/product-card.js';

const imagesContainers = document.querySelectorAll('.product-card__images');

imagesContainers.forEach((imageContainer) => {
  const leftArrows =
    imageContainer.parentElement.querySelectorAll('.arrow-left');
  const rightArrows =
    imageContainer.parentElement.querySelectorAll('.arrow-right');

  const productCard = new ProductCard(imageContainer.childElementCount);

  leftArrows.forEach((leftArrow) => {
    leftArrow.addEventListener('click', () =>
      productCard.handleLeftArrowClick(imageContainer)
    );
  });

  rightArrows.forEach((rightArrow) => {
    rightArrow.addEventListener('click', () =>
      productCard.handleRightArrowClick(imageContainer)
    );
  });
});
