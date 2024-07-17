package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "driver_license")
public class DriverLicense {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // Add an ID field for the primary key
	private String code;
	@Column(name = "full_name")
	private String fullName;
	@Column(name = "dob")
	private LocalDate dob;
	@Column(name = "url_image")
	private String urlImage;
	@Enumerated(EnumType.STRING)
	private AuthenticationStatus status;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;
}
