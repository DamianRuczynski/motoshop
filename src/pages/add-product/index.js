import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes } from 'firebase/storage';

import { templates } from '../../js/templates.js';
import { setSingleProductCard } from '../../js/product-card.js';
import toggleMenu from '../../js/menu';
import { shoppingCart } from '../../js/shopping-cart';
import { getProductFormSubmitData } from '../../js/add-product-form';
import ajax from '../../js/ajax';
import storage from '../../firebase/config.js';

import './index.scss';

const uploadImageToFirebase = async (files) => {
  const promises = [];
  const imageNames = files.map((file) => uuidv4());
  files.forEach((file, index) => {
    const storageRef = ref(storage, imageNames[index]);
    promises.push(uploadBytes(storageRef, file));
  });
  await Promise.all(promises);
  return imageNames;
};

shoppingCart.createLocalStorageObject();
toggleMenu();

const fileInput = document.querySelector('#product-image');
const productsForm = document.querySelector('#product-form');

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

const productFormSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    const images = await uploadImageToFirebase(Array.from(fileInput.files));
    const productFormSubmitData = getProductFormSubmitData(images);
    await ajax.addProduct(productFormSubmitData);
    alert('Product saved in database');
    document.location = '/';
  } catch (err) {
    console.log(err.message);
  }
};

fileInput.addEventListener('change', handleFileInputChange);
productsForm.addEventListener('submit', productFormSubmitHandler);
