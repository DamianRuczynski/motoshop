package com.motoshop.ecommerce.dto;

import java.math.BigDecimal;
import java.util.List;

public class ProductDto {

    private Long id;
    private String name;
    private BigDecimal price;
    private List<String> images;

    public ProductDto(Long id, String name, BigDecimal price, List<String> images) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.images = images;
    }

    public ProductDto(Long id, String name, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
