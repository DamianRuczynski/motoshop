package com.motoshop.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProduct;

    private String name;

    private String catalogNumber;

    private String photo;

    private String description;

    private BigDecimal priceNetto;

    private BigDecimal priceBrutto;

    private BigDecimal vat;

    private Integer quantity;

    private Long idProductCategory;

    private Long idPart;

    public Product(String name, String catalogNumber, String description, BigDecimal priceNetto, BigDecimal priceBrutto, BigDecimal vat, Integer quantity, Long idProductCategory) {
        this.name = name;
        this.catalogNumber = catalogNumber;
        this.description = description;
        this.priceNetto = priceNetto;
        this.priceBrutto = priceBrutto;
        this.vat = vat;
        this.quantity = quantity;
        this.idProductCategory = idProductCategory;
    }
}
