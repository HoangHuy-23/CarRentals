package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "car")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "car_location")
    private String carLocation;
    @Column(name = "model_of_year")
    private int modalOfYear;
    private String description;
    @Enumerated
    private CarType carType;
    private boolean isCollateral;
    @Column(name = "num_of_seats")
    private int numOfSeats;
    @Enumerated
    private FuelType fuelType;
    @Column(name = "fuel_consumption")
    private int fuelConsumption;
    @Column(name = "price_per_day")
    private long pricePerDay;
    @ElementCollection
    private List<CarImage> carImages;
    @Enumerated
    private CarStatus status;

    @OneToMany(mappedBy = "car")
    private List<CarReview> carReviews;
}
