const baseURL = 'http://localhost:3000';

const ajax = {
  fetchProducts: async (endpoint) => {
    const res = await fetch(baseURL + endpoint);
    const data = await res.json();

    return data;
  },
};

export default ajax;
