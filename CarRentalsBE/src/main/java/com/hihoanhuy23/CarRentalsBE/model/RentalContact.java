package com.hihoanhuy23.CarRentalsBE.model;

import java.time.LocalDateTime;

public class RentalContact {
    private Long id;
    private Car car;
    private Customer customer;
    private CarOwner carOwner;
    private LocalDateTime pickUpDate;
    private LocalDateTime dropOffDate;
    private String deliveryAddress;
    private long rentalInsurance;
    private long totalPrice;
}
