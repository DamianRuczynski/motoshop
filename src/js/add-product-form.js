const formElements = {
  productForm: document.querySelector('#product-form'),
  productNameInput: document.querySelector('#product-name'),
  productCatalagNumberInput: document.querySelector('#product-catalog-number'),
  productVatInput: document.querySelector('#vat'),
  productNetPriceInput: document.querySelector('#product-net-price'),
  productGrossPriceInput: document.querySelector('#product-gross-price'),
  productQuantityInput: document.querySelector('#product-quantity'),
  productCategorySelect: document.querySelector('#product-category'),
  productDescTextarea: document.querySelector('#product-desc'),
  productFormSubmitButton: document.querySelector(
    '.add-product-button[type="submit"]'
  ),
};

export const getProductFormSubmitData = (images) => ({
  name: formElements.productNameInput.value,
  catalog_number: formElements.productCatalagNumberInput.value,
  vat: formElements.productVatInput.value,
  price_netto: formElements.productNetPriceInput.value,
  price_brutto: formElements.productGrossPriceInput.value,
  quantity: formElements.productQuantityInput.value,
  id_product_category: formElements.productCategorySelect.value,
  description: formElements.productDescTextarea.value,
  images,
});
