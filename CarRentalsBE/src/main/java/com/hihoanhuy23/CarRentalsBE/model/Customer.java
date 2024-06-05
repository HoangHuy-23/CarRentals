package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
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
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "account_id", foreignKey = @ForeignKey(name = "FK_CUSTOMER_ACCOUNT"))
    private Account account;
    @OneToMany(mappedBy = "customer")
    private Set<Credential> credentials;

    @OneToMany(mappedBy = "customer")
    private List<CarReview> carReviews;

    @OneToMany(mappedBy = "customer")
    private List<RentalContact> rentalContacts;
}
