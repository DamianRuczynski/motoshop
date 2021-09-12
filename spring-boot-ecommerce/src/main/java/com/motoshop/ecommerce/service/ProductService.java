package com.motoshop.ecommerce.service;

import com.motoshop.ecommerce.dao.ProductDtoRepository;
import com.motoshop.ecommerce.dto.ProductDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductDtoRepository productRepository;

    public ProductService(ProductDtoRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDto> getAllProducts(){
        return productRepository.getAllProductsWithImages();
    }
}
