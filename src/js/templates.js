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
    const hasImages = product.images.length > 0;
    return `
      <div class="product-card">
        <div class="product-card__images">
        ${product.images
          .map((image) => `<img src="${image}" alt="product image" />`)
          .join('')}
        ${!hasImages ? '<img src="./assets/image-not-available.png"/>' : ''}
        </div>
        <a class="product-card__link" href="./product-details.html?id=${
          product.id
        }">
          <div class="product-card__backdrop">
            <div class="product-card__backdrop__inner">
              <span class="arrow-left material-icons">arrow_forward_ios</span>
              <span class="arrow-right material-icons">arrow_forward_ios</span>
            </div>
          </div>
        </a>
        <div class="product-card__info">
          <p class="product-card__info__title">${product.name}</p>
          <p class="product-card__info__price">$${product.price}</p>
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

const generateProductCardDetails = (product) => {
  const hasImages = product.images.length > 0;
  return `
    <div class="product-card">
    <div class="product-card__images">
    ${product.images
      .map((image) => `<img src="${image}" alt="product image" />`)
      .join('')}
    ${!hasImages ? '<img src="./assets/image-not-available.png"/>' : ''}
    </div>
    <div class="product-card__backdrop">
      <div class="product-card__backdrop__inner">
        <span class="arrow-left material-icons">arrow_forward_ios</span>
        <span class="arrow-right material-icons">arrow_forward_ios</span>
      </div>
    </div>
    <div class="product-card__info">
      <p class="product-card__info__title">${product.name}</p>
      <p class="product-card__info__price">$${product.price}</p>
      <button class="product-card__info__add-to-cart-button button">
        <span class="material-icons">add_shopping_cart</span>
        <span>Add to cart</span>
      </button>
      <button class="product-card__info__edit-product-button button">
        <span class="material-icons">edit</span>
        <span>Edit product</span>
      </button>
      <button class="product-card__info__delete-product-button button">
        <span class="material-icons">clear</span>
        <span>Delete product</span>
      </button>
    </div>
    </div>
    <div class="product-desc">
      <p>Information:</p>
      <p>${product.desc}</p>
    </div>
  `;
};

export const templates = {
  generateProductCard,
  generateProductCards,
  generateProductCardDetails,
};
