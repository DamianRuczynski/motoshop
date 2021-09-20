const baseURL = 'http://80.211.249.17:8085/';

const ajax = {
  fetchProducts: async (endpoint) => {
    const res = await fetch(baseURL + endpoint);
    const data = await res.json();

    return data;
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
