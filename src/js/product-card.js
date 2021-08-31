export default class ProductCard {
  constructor(imagesCount) {
    this.translateValue = 0;
    this.imagesCount = imagesCount;
  }

  canIncrement = () => this.imagesCount - 1 !== this.translateValue / 100;

  canDecrement = () => this.translateValue !== 0;

  disableArrows = (arrows) => {
    if (this.imagesCount === 1) {
      arrows.forEach((arrow) => arrow.classList.add('arrow--inactive'));
    }
  };

  handleRightArrowClick = (element) => {
    if (!this.canIncrement()) {
      this.translateValue = -100;
    }
    if (this.canIncrement()) {
      this.translateValue += 100;
      element.style.transform = `translateX(-${this.translateValue}%)`;
    }
  };

  handleLeftArrowClick = (element) => {
    if (!this.canDecrement()) {
      this.translateValue = this.imagesCount * 100;
    }
    if (this.canDecrement()) {
      this.translateValue -= 100;
      element.style.transform = `translateX(-${this.translateValue}%)`;
    }
  };
}

export const setSingleProductCard = () => {
  const imageContainer = document.querySelector('.product-card__images');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');

  const productCard = new ProductCard(imageContainer.childElementCount);

  productCard.disableArrows([leftArrow, rightArrow]);

  leftArrow.addEventListener('click', () =>
    productCard.handleLeftArrowClick(imageContainer)
  );
  rightArrow.addEventListener('click', () =>
    productCard.handleRightArrowClick(imageContainer)
  );
};
