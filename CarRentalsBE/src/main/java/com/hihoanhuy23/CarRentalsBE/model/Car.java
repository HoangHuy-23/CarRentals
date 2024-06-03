package com.hihoanhuy23.CarRentalsBE.model;

import java.util.List;

public class Car {
    private Long id;
    private String name;
    private String carLocation;
    private int modalOfYear;
    private String description;
    private CarType carType;
    private boolean isCollateral;
    private int numOfSeats;
    private FuelType fuelType;
    private int fuelConsumption;
    private long pricePerDay;
    private List<CarImage> carImages;
    private CarStatus status;
}
