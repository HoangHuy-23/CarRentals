package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.*;

import java.util.List;
import java.util.Optional;

public interface CarService {
    Car addNewCar(String name, String carLocation, int modelOfYear,
                  String description, CarType carType, boolean isCollateral,
                  FuelType fuelType, int fuelConsumption, long pricePerDay,
                  List<CarImage> carImages, CarStatus status, List<Certificate> certificates, CarOwner carOwner);

    List<Car> getAllCars();

    Optional<Car> getCarById(Long carId);

    Car updateCar();

    boolean deleteCar(Long carId);

}
