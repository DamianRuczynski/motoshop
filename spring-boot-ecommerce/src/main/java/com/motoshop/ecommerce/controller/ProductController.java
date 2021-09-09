package com.motoshop.ecommerce.controller;

import com.motoshop.ecommerce.dao.ProductRepository;
import com.motoshop.ecommerce.entity.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {this.productRepository = productRepository; }

    @GetMapping("/products")
    public List<Product> showAllProducts(){

        return productRepository.findAll();
    }
}
