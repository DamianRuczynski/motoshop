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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idMotorcycleModel;

    private Long idMotorcycleBrand;

    private String name;

    private String version;

    private String yearOfProduction;

    private String capacity;

    private Long idPart;
}
