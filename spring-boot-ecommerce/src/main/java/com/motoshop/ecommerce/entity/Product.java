package com.motoshop.ecommerce.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Entity
@Table(name="product")
//@Data
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
    private int quantity;

    private Long idProductCategory;

    private Long idPart;
}
