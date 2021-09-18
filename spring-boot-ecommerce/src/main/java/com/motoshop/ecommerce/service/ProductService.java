package com.motoshop.ecommerce.service;

import com.motoshop.ecommerce.dao.ProductDtoRepository;
import com.motoshop.ecommerce.dao.ProductRepository;
import com.motoshop.ecommerce.dto.CreateProductDto;
import com.motoshop.ecommerce.dto.ProductDto;
import com.motoshop.ecommerce.dto.SingleProductDto;
import com.motoshop.ecommerce.validators.ProductDtoValidator;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductDtoRepository productDtoRepository;
    private final ProductDtoValidator productDtoValidator;

    public ProductService(ProductRepository productRepository, ProductDtoRepository productDtoRepository, ProductDtoValidator productDtoValidator) {
        this.productRepository = productRepository;
        this.productDtoRepository = productDtoRepository;
        this.productDtoValidator = productDtoValidator;
    }

    public List<ProductDto> getAllProducts() {
        return productDtoRepository.getAllProductsWithImages();
    }

    public SingleProductDto getProductById(Long id_product) {
        return productDtoRepository.getProductById(id_product);
    }

    @Transactional
    public String createNewProduct(CreateProductDto createProductDto) {
        List<String> errors = productDtoValidator.validateProduct(createProductDto);
        if (errors.isEmpty()) {
            productDtoRepository.saveProductWithImages(createProductDto);
            return "Product created!!";
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.toString());
        }
    }
}
