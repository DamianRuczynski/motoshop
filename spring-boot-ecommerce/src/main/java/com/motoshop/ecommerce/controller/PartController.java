package com.motoshop.ecommerce.controller;

import com.motoshop.ecommerce.dao.PartRepository;
import com.motoshop.ecommerce.entity.Part;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PartController {

    private final PartRepository partRepository;

    public PartController(PartRepository partRepository) {
        this.partRepository = partRepository;
    }

    @GetMapping("/parts")
    public List<Part> showAllParts() {

        return partRepository.findAll();
    }
}
