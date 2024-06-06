package com.hihoanhuy23.CarRentalsBE.response;

import com.hihoanhuy23.CarRentalsBE.model.*;

import java.util.List;

public class CarResponse {
    private Long id;
    private String name;
    private String carLocation;
    private int modalOfYear;
    private String description;
    private CarTypeResponse carType;
    private boolean isCollateral;
    private int numOfSeats;
    private FuelTypeResponse fuelType;
    private int fuelConsumption;
    private long pricePerDay;
    private List<CarImageResponse> carImages;
    private CarStatusResponse status;
    private List<CarReviewResponse> carReviews;
    private List<CertificateResponse> certificates;
    private CarOwnerResponse carOwner;
}
