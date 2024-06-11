package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
    @Column(name = "rental_insurance")
	private Long rentalInsurance;
    @Column(name = "total_price")
	private Long totalPrice;
}
