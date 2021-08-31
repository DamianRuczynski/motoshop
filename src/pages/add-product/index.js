import './index.scss';

import { templates } from '../../js/templates.js';
import { setSingleProductCard } from '../../js/product-card.js';
import toggleMenu from '../../js/menu';

toggleMenu();

const fileInput = document.querySelector('#product-image');

const handleFileInputChange = () => {
  const setImageDeletion = () => {
    const deleteImageButton = document.querySelector(
      '.product-card__info__delete-product-button'
    );

    deleteImageButton.addEventListener('click', () => {
      fileInput.value = null;
      handleFileInputChange();
    });
  };

  const productCardElement = document.querySelector('.product-card');

  if (fileInput.files.length === 0) {
    productCardElement.innerHTML = '';
    productCardElement.classList.remove('active');
    return;
  }

  const images = Array.from(fileInput.files)
    .map((file) => {
      return `<img src="${URL.createObjectURL(file)}" />`;
    })
    .join('');

  productCardElement.innerHTML = templates.generateProductCard(images);

  if (productCardElement.childElementCount > 0) {
    productCardElement.classList.add('active');
    setSingleProductCard();
    setImageDeletion();
  }
};

fileInput.addEventListener('change', handleFileInputChange);
