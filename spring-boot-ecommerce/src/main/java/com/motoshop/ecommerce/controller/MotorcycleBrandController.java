package com.motoshop.ecommerce.controller;

import com.motoshop.ecommerce.dao.MotorcycleBrandRepository;
import com.motoshop.ecommerce.entity.MotorcycleBrand;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MotorcycleBrandController {

    private final MotorcycleBrandRepository motorcycleBrandRepository;

    public MotorcycleBrandController(MotorcycleBrandRepository motorcycleBrandRepository) { this.motorcycleBrandRepository = motorcycleBrandRepository;}

    @GetMapping("/brands")
    public List<MotorcycleBrand> showAllBrands() {

        return motorcycleBrandRepository.findAll();
    }
}
