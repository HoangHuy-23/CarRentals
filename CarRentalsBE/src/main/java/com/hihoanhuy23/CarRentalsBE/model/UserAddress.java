package com.hihoanhuy23.CarRentalsBE.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

@Entity
@Table(name = "user_address")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "remind_name")
	private String remindName;
	private String city;
	private String district;
	private String ward;

	@Column(name = "address_map")
	private String addressMap;
	private boolean isDefault;
	
	@Enumerated(EnumType.STRING)
	private UserAddressType type;

	@JsonIgnore
	@ManyToOne()
	@JoinColumn(name = "user_id")
	private User user;
	

}
