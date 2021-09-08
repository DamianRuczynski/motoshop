//refernece to local storage object
const cartStorage = localStorage.getItem('shoppingCart');

let cartStorageArray = [];

const createLocalStorageObject = () => {
  if (!cartStorage) localStorage.setItem('shoppingCart', '[]');
  else {
    cartStorageArray = JSON.parse(cartStorage);
    updateCounter();
  }
};

const addToCart = (productId, amount) => {
  const productInfo = {
    id: cartStorageArray.length,
    productId: productId,
    amount: amount,
  };

  const check = checkForProduct(productId);

  if (check) {
    cartStorageArray.forEach((element) => {
      if (element.productId === productId) {
        cartStorageArray[element.id].amount++;
      }
    });
  } else {
    cartStorageArray.push(productInfo);
  }

  localStorage.shoppingCart = JSON.stringify(cartStorageArray);
  updateCounter();
};

//cheks if praduct already exists in local cartStorageArray
const checkForProduct = (productId) => {
  let productExists = false;
  cartStorageArray.forEach((element) => {
    if (element.productId === productId) {
      productExists = true;
    }
  });
  return productExists;
};

//update shopping cart icon counter
const updateCounter = () => {
  const paragraph = document.querySelector('.counter');
  let counter = 0;
  cartStorageArray.forEach((element) => {
    counter += element.amount;
  });
  paragraph.textContent = `${counter}`;
};

export const shoppingCart = {
  createLocalStorageObject,
  addToCart,
};
