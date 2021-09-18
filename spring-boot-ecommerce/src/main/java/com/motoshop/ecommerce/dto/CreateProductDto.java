package com.motoshop.ecommerce.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class CreateProductDto {

    private String catalog_number;
    private String description;
    private String name;
    private BigDecimal price_brutto;
    private BigDecimal price_netto;
    private Integer quantity;
    private BigDecimal vat;
    private List<String> images;
    private Long id_product_category;

}
