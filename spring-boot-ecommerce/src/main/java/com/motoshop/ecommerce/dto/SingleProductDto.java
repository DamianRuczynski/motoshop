package com.motoshop.ecommerce.dto;

import java.math.BigDecimal;
import java.util.List;

public class SingleProductDto {

    private Long id;
    private String name;
    private BigDecimal price;
    private List<String> images;
    private String desc;

    public SingleProductDto(Long id, String name, BigDecimal price, List<String> images, String desc) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.images = images;
        this.desc = desc;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
