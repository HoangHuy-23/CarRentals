package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	private int start;
    private String comment;
    private LocalDate createAt;
    @ManyToOne
    @JoinColumn(name = "car_id")
    @JsonIgnore
    private Car car;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
}
