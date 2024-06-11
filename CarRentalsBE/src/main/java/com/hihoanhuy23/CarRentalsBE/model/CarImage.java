package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "car_image")
public class CarImage {
	@EmbeddedId
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "car_id")
	private Car car;
	@Column(name = "url_image")
	private String urlImage;
}
