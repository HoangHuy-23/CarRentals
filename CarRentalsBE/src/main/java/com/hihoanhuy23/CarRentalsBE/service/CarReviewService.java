package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.CarReview;

import java.util.List;

public interface CarReviewService {
    CarReview addNewReview();

    List<CarReview> getAllReviewByCarId(Long carId);
}
