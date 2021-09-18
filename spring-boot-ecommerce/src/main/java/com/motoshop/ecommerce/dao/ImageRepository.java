package com.motoshop.ecommerce.dao;

import com.motoshop.ecommerce.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Images, Long> {
}
