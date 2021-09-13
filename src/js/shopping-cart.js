//refernece to local storage object
const cartStorage = localStorage.getItem('shoppingCart');

let cartStorageArray = [];

const createLocalStorageObject = () => {
  if (!cartStorage) localStorage.setItem('shoppingCart', '[]');
  else {
    cartStorageArray = JSON.parse(cartStorage);
    updateCounter();
    return cartStorageArray;
  }
};

const addToCart = (productId, productPrice) => {
  const productInfo = {
    id: cartStorageArray.length,
    productId: productId,
    productPrice: productPrice,
    amount: 1,
  };

  const check = checkForProduct(productId);

  if (check) {
    cartStorageArray.forEach((element) => {
      if (element.productId === productId) {
        if (cartStorageArray[element.id].amount === 5) {
          alert('The maximum quantity for one product in the cart is 5.');
          return;
        }
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
  updateTotalPrice(-productPrice, 0);
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
    counter += parseInt(element.amount);
  });
  paragraph.textContent = `${counter}`;
};

const updateTotalPrice = () => {
  const updatedPrice = document.querySelector('.total-price');

  const totalPrice = cartStorageArray.reduce((acc, curr) => {
    return (acc += curr.amount * parseFloat(curr.productPrice));
  }, 0);

  updatedPrice.textContent = `$${totalPrice.toFixed(2)}`;
};

const changeAmount = (productId, productPrice, localStorageItemId) => {
  const selectList = document.querySelector(`[id='${productId}'] select`);
  const price = document.querySelector(`[id='${productId}']  .product__price`);
  selectList.addEventListener('change', (e) => {
    const updatedPrice = (e.target.value * productPrice).toFixed(2);
    price.textContent = `$${updatedPrice}`;

    //update amount of products in local storage to update total price
    cartStorageArray.forEach((product) => {
      if (product.productId == productId) {
        cartStorageArray[localStorageItemId].amount = e.target.value;
        localStorage.shoppingCart = JSON.stringify(cartStorageArray);
        updateTotalPrice();
        updateCounter();
      }
    });
  });
};

export const shoppingCart = {
  createLocalStorageObject,
  addToCart,
  deleteFromCart,
  updateTotalPrice,
  changeAmount,
};
