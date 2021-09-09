package com.motoshop.ecommerce.controller;

import com.motoshop.ecommerce.dao.MotorcycleModelRepository;
import com.motoshop.ecommerce.entity.MotorcycleModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MotorcycleModelController {

    private final MotorcycleModelRepository motorcycleModelRepository;

    public MotorcycleModelController(MotorcycleModelRepository motorcycleModelRepository) { this.motorcycleModelRepository = motorcycleModelRepository; }

    @GetMapping("/models")
    public List<MotorcycleModel> showAllModels() {

        return motorcycleModelRepository.findAll();
    }
}
