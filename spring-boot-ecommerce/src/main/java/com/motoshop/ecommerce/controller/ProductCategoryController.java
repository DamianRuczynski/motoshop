package com.motoshop.ecommerce.controller;

import com.motoshop.ecommerce.dao.ProductCategoryRepository;
import com.motoshop.ecommerce.entity.ProductCategory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductCategoryController {

    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategoryController(ProductCategoryRepository productCategoryRepository) { this.productCategoryRepository = productCategoryRepository; }

    @GetMapping("/category")
    public List<ProductCategory> showAllCategories() {

        return productCategoryRepository.findAll();
    }
}
