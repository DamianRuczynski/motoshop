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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product", nullable = false)
    private Long idProduct;

//    @ManyToOne
//    @JoinColumn(name = "category_id", nullable = false)
//    private ProductCategory category;

    @Column(name = "name")
    private String name;

    @Column(name = "catalog_number")
    private String catalogNumber;

    @Column(name = "photo")
    private String photo;

    @Column(name = "description")
    private String description;

    @Column(name = "price_netto")
    private BigDecimal priceNetto;

    @Column(name = "price_brutto")
    private BigDecimal priceBrutto;

    @Column(name = "vat")
    private BigDecimal vat;

    @Column(name = "quantity")
    private int quantity;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "part")
//    private Set<Part> part;
}
