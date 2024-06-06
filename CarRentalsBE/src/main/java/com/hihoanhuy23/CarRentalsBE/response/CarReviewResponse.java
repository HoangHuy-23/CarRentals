package com.hihoanhuy23.CarRentalsBE.response;

import java.time.LocalDate;

public class CarReviewResponse {
    private int start;
    private String review;
    private LocalDate dateOfReview;
    private CarResponse car;
    private CustomerResponse customer;
}
