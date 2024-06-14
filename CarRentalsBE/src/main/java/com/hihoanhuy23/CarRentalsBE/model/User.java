package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDate;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "full_name")
	private String fullName;
	private LocalDate dob;
	private boolean gender;
	private String phone;
	private String email;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	private String linkFb;
	private String avatar;
	private LocalDate createAt;
	@Column(name = "rating_scores")
	private double ratingScores;
	@Column(name = "num_of_trip")
	private int numOfTrip;
	@Enumerated(EnumType.STRING)
	private UserRole role;
	@OneToOne(mappedBy = "user")
	private DriverLicense driverLicense;
	
	@OneToMany(mappedBy = "user")
	private Set<UserAddress> addresses;

	@JsonIgnore
	@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Car> myCars;

	@JsonIgnore
	@ManyToMany(mappedBy = "userFavourite", cascade = CascadeType.ALL)
	private Set<Car> favouriteCars;

	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CarReview> carReviews;

	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<RentalContact> rentalContacts;

}
