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
    @Enumerated(EnumType.STRING)
    private CarType carType;
    private boolean isCollateral;
    @Column(name = "num_of_seats")
    private int numOfSeats;
    @Enumerated(EnumType.STRING)
    private FuelType fuelType;
    @Column(name = "fuel_consumption")
    private int fuelConsumption;
    @Column(name = "price_per_day")
    private long pricePerDay;
    @OneToMany(mappedBy = "car")
    private List<CarImage> carImages;
    @Enumerated(EnumType.STRING)
    private CarStatus status;
    @OneToMany(mappedBy = "car")
    private List<CarReview> carReviews;
    @OneToMany(mappedBy = "car")
    private List<Certificate> certificates;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_id")
    private CarOwner carOwner;
}
