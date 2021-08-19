export default class ProductCard {
  constructor(imagesCount) {
    this.translateValue = 0;
    this.imagesCount = imagesCount;
  }

  canIncrement = () => this.imagesCount - 1 !== this.translateValue / 100;

  canDecrement = () => this.translateValue !== 0;

  handleRightArrowClick = (element) => {
    if (this.canIncrement()) {
      this.translateValue += 100;
      element.style.transform = `translateX(-${this.translateValue}%)`;
    }
  };

  handleLeftArrowClick = (element) => {
    if (this.canDecrement()) {
      this.translateValue -= 100;
      element.style.transform = `translateX(-${this.translateValue}%)`;
    }
  };
}
