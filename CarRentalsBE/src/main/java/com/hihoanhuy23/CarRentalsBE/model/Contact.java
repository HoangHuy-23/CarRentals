package com.hihoanhuy23.CarRentalsBE.model;

import jakarta.persistence.Embeddable;

import java.util.Set;

@Embeddable
public class Contact {
    private String email;
    private String phone;
}
