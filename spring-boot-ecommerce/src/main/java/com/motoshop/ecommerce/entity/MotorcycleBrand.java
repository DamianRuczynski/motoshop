package com.motoshop.ecommerce.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="motorcycle_brand")
//@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MotorcycleBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idMotorcycleBrand;

    private String name;

    private String country;

    private String logo;

    private Long idMotorcycleModels;


}
