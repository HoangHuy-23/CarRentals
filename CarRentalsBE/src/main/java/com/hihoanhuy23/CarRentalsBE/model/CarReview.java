package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDate;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "car_review")
public class CarReview {
	private int start;
    private String review;
    private LocalDate createAt;
    @EmbeddedId
    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;
    @EmbeddedId
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
