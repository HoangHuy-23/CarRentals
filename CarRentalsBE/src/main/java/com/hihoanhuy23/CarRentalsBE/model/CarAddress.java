package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class CarAddress {
	private String city;
	private String district;
	private String ward;
	@Column(name = "address_map")
	private String addressMap;
}
