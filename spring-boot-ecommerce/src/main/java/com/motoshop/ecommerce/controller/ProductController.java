package com.motoshop.ecommerce.controller;

import com.motoshop.ecommerce.dto.ProductDto;
import com.motoshop.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {this.productService = productService; }

    @GetMapping("/products")
    public List<ProductDto> showAllProducts(){
        return productService.getAllProducts();
    }
}
