package com.motoshop.ecommerce.dao;

import com.motoshop.ecommerce.entity.Part;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<Part, Long> {
}
