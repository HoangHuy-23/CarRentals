package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "car_review")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CarReview {
    private int start;
    private String review;
    private LocalDate dateOfReview;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id")
    private Car car;
    @ManyToOne()
    @JoinColumn(name = "customer_id")
    private Customer customer;

}
