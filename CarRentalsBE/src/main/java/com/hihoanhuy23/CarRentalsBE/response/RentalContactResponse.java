package com.hihoanhuy23.CarRentalsBE.response;

import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.Customer;


import java.time.LocalDateTime;

public class RentalContactResponse {
    private Long id;
    private CarResponse car;
    private CustomerResponse customer;
    private LocalDateTime pickUpDate;
    private LocalDateTime dropOffDate;
    private String deliveryAddress;
    private long rentalInsurance;
    private long totalPrice;
}
