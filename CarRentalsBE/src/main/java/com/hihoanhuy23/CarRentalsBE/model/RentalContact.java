package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "rental_contact")
public class RentalContact {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "car_id")
	private Car car;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	@Column(name  = "pick_up_date")
    private LocalDateTime pickUpDate;
    @Column(name = "drop_off_date")
    private LocalDateTime dropOffDate;
	@Enumerated(EnumType.STRING)
	private PickUpLocation pickUpLocation;
    @Column(name = "rental_insurance")
	private Long rentalInsurance;
    @Column(name = "total_price")
	private Long totalPrice;
	@Enumerated(EnumType.STRING)
	private RentalStatusType status;
}
