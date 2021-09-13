const baseURL = 'http://80.211.249.17:8085/';

const ajax = {
  fetchProducts: async (endpoint) => {
    const res = await fetch(baseURL + endpoint);
    const data = await res.json();

    return data;
  },
};

export default ajax;
