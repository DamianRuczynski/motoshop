const generateProductCard = (images) => {
  return `
    <div class="product-card__images">
      ${images}
    </div>
    <div class="product-card__backdrop">
      <div class="product-card__backdrop__inner">
        <span class="arrow-left material-icons">arrow_forward_ios</span>
        <span class="arrow-right material-icons">arrow_forward_ios</span>
      </div>
    </div>
    <button
      class="product-card__info__delete-product-button button"
      type="button"
    >
      <span class="material-icons">clear</span>
      <span>Delete images</span>
    </button>
  `;
};

const generateProductCards = (products) => {
  const productElements = products.map((product) => {
    return `
      <div class="product-card">
        <div class="product-card__images">
        ${product.images
          .map((image) => `<img src="${image}" alt="battery" />`)
          .join('')}
        </div>
        <a class="product-card__link" href="./product-details.html">
          <div class="product-card__backdrop">
            <div class="product-card__backdrop__inner">
              <span class="arrow-left material-icons">arrow_forward_ios</span>
              <span class="arrow-right material-icons">arrow_forward_ios</span>
            </div>
          </div>
        </a>
        <div class="product-card__info">
          <p class="product-card__info__title">${product.name}</p>
          <p class="product-card__info__price">${product.price} zł</p>
          <button class="product-card__info__add-to-cart-button button">
            <span class="material-icons">add_shopping_cart</span>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    `;
  });

  return productElements.join('');
};

export const templates = {
  generateProductCard,
  generateProductCards,
};
