package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name= "car_owner")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CarOwner extends User{
    @OneToMany(mappedBy = "carOwner")
    private Set<Credential> credentials;
}
