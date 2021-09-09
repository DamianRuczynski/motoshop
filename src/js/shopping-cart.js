//refernece to local storage object
const cartStorage = localStorage.getItem('shoppingCart');

let cartStorageArray = [];
let totalPrice = 0;

const createLocalStorageObject = () => {
  if (!cartStorage) localStorage.setItem('shoppingCart', '[]');
  else {
    cartStorageArray = JSON.parse(cartStorage);
    updateCounter();
    return cartStorageArray;
  }
};

const addToCart = (productId) => {
  const productInfo = {
    id: cartStorageArray.length,
    productId: productId,
    amount: 1,
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

const deleteFromCart = (productId, productPrice) => {
  const productToDelete = document.getElementById(`${productId}`);
  productToDelete.remove();
  cartStorageArray.forEach((element, index) => {
    if (element.productId === productId) {
      cartStorageArray.splice(index, 1);
    }
  });
  localStorage.shoppingCart = JSON.stringify(cartStorageArray);
  updateCounter();
  updateTotalPrice(-productPrice);
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

const updateTotalPrice = (productPrice) => {
  const updatedPrice = document.querySelector('.total-price');
  const convertedPrice = parseFloat(productPrice);
  console.log(convertedPrice);
  totalPrice += convertedPrice;
  console.log(totalPrice);
  if (totalPrice.toFixed(2) === '-0.00') {
    updatedPrice.textContent = `$0.00`;
  } else updatedPrice.textContent = `$${totalPrice.toFixed(2)}`;
};

export const shoppingCart = {
  createLocalStorageObject,
  addToCart,
  deleteFromCart,
  updateTotalPrice,
};
