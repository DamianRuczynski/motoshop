import { ref, getDownloadURL } from 'firebase/storage';

import storage from '../firebase/config';

const baseURL = 'http://80.211.249.17:8085/';

const ajax = {
  fetchProduct: async (endpoint) => {
    const res = await fetch(baseURL + endpoint);
    const product = await res.json();
    const promises = [];
    if (product.images.length > 0) {
      product.images.forEach((image) => {
        promises.push(getDownloadURL(ref(storage, image)));
      });
    }
    const images = await Promise.all(promises);
    product.images = images;
    return product;
  },
  fetchProducts: async (endpoint) => {
    const res = await fetch(baseURL + endpoint);
    const products = await res.json();
    const promises = [];
    products.forEach((product) => {
      if (product.images.length > 0) {
        product.images.forEach((image) => {
          promises.push(getDownloadURL(ref(storage, image)));
        });
      }
    });
    const images = await Promise.all(promises);
    products.forEach((product, index) => {
      const updatedImages = [];
      for (let i = 0; i < product.images.length; i++) {
        updatedImages.push(images.shift());
      }
      product.images = updatedImages;
    });
    return products;
  },
  addProduct: async (productsFormSubmitData) => {
    const res = await fetch(baseURL + 'createProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productsFormSubmitData),
    });
    if (!res.ok) throw new Error('adding product failed');
  },
};

export default ajax;
