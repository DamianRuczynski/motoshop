package com.motoshop.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idImage;

    private Long idProduct;

    private String path;
}
