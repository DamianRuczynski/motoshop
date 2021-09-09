package com.motoshop.ecommerce.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="motorcycle_model")
//@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MotorcycleBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_motorcycle_model", nullable = false)
    private Long idMotorcycleBrand;

    @Column(name = "name")
    private String name;

    @Column(name = "country")
    private String country;

    @Column(name = "logo")
    private String logo;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "brand")
//    private Set<MotorcycleModel> models;


}
