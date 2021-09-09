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

public class MotorcycleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_motorcycle_model", nullable = false)
    private Long idMotorcycleModel;

//    @ManyToOne
//    @JoinColumn(name = "id_motorcycle_brand", nullable = false)
//    private MotorcycleBrand brand;

    @Column(name = "name")
    private String name;

    @Column(name = "version")
    private String version;

    @Column(name = "year_of_production")
    private String yearOfProduction;

    @Column(name = "capacity")
    private String capacity;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "part")
//    private Set<Part> part;
}
