package com.hihoanhuy23.CarRentalsBE.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "licence_plates")
	private String licencePlates;
	private String company;
	private String model;
	private int seats;
	@Column(name = "year_of_production")
	private int yearOfProduction;
	@Enumerated(EnumType.STRING)
	private TransmissionType transmission;
	@Enumerated(EnumType.STRING)
	private FuelType fuel;
	@Column(name = "fuel_consumption")
	private int fuelConsumption;
	private String description;
	private Long price;
	@Embedded
	private CarAddress address;
	@Column(name = "car_rental_terms")
	private String carRentalTerms;
	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CarImage> carImages;
	private int numOfTrip;
	@Enumerated(EnumType.STRING)
	private AuthenticationStatus status;
	@Column(name = "rating_scores")
	private double ratingScores;
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "owner_id")
	private User owner;
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "user_favourite_car",
			joinColumns = @JoinColumn(name = "car_id"),
			inverseJoinColumns = @JoinColumn(name = "user_id")
	)
	private Set<User> userFavourite;

	@JsonIgnore
	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CarReview> carReviews;

	@JsonIgnore
	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<RentalContact> listRentalContact;
	
}
