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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_part", nullable = false)
    private Long idPart;

//    @ManyToOne
//    @JoinColumn(name = "id_product", nullable = false)
    //private Product part;

//    @ManyToOne
//    @JoinColumn(name = "id_product", nullable = false)
  //  private MotorcycleModel motorcycle_model;

}
