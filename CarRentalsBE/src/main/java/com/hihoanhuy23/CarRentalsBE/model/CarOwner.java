package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name= "car_owner")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CarOwner extends User{
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "account_id", foreignKey = @ForeignKey(name = "FK_CAROWNER_ACCOUNT"))
    private Account account;
    @OneToMany(mappedBy = "carOwner")
    private List<Car> cars;
}
