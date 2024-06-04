package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "customer")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Customer extends User{
    @OneToMany(mappedBy = "customer")
    private Set<Credential> credentials;

    @OneToMany(mappedBy = "customer")
    private List<CarReview> carReviews;
}
