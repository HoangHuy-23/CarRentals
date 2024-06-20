package com.hihoanhuy23.CarRentalsBE.service;


import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.CarReview;
import com.hihoanhuy23.CarRentalsBE.model.User;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

public interface CarService {
    public Car createCar(CreateCarRequest req, User owner) throws UserException;

    public boolean deleteCar(Long carId) throws CarException;

    public Car updateCar(Long carId, CreateCarRequest req) throws CarException;

    public Car findCarById(Long carId) throws CarException;

    public Car updateCarStatus(Long carId) throws CarException;

    public List<Car> searchCarByLocation(String city);

    public List<Car> filterCars(String city, String company, String fuel, String transmission, int minPrice, int maxPrice, int minSeats, int maxSeats, int yearOfProduction, int fuelConsumption, String sort);

    public User getOwner(Long carId) throws CarException;

    public Set<CarReview> getCarReview(Long carId) throws CarException;
}
