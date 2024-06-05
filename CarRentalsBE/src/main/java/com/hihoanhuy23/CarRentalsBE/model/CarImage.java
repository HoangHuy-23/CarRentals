package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "car_image")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CarImage {
    @Column(name = "url_image")
    private String urlImage;
    private String description;
    @EmbeddedId
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id")
    private Car car;
}
