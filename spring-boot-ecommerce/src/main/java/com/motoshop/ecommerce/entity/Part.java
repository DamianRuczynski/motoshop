package com.motoshop.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@Table(name="part")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Part {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPart;

    private Long idProduct;

    private Long idMotorcycleModel;

}
