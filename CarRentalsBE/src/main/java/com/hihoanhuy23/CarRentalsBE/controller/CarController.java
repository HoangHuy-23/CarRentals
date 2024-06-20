package com.hihoanhuy23.CarRentalsBE.controller;


import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.CarReview;
import com.hihoanhuy23.CarRentalsBE.model.User;
import com.hihoanhuy23.CarRentalsBE.repository.CarRepository;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import com.hihoanhuy23.CarRentalsBE.response.ApiResponse;
import com.hihoanhuy23.CarRentalsBE.service.CarService;
import com.hihoanhuy23.CarRentalsBE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;


@RestController
@RequestMapping("/api/cars")
public class CarController {
    @Autowired
    private CarService carService;
    @Autowired
    private UserService userService;
    @Autowired
    private CarRepository carRepository;


    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Car>> createCarHandler(@RequestBody CreateCarRequest carReq, @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        Car savedCar = carService.createCar(carReq, user);
        ApiResponse<Car> response = new ApiResponse<>(true, "Car create successfully", savedCar);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    @GetMapping("/car")
    public ResponseEntity<ApiResponse<Car>> findCarByIdHandler(@RequestParam Long carId) throws CarException {
        Car car = carService.findCarById(carId);
        ApiResponse<Car> response = new ApiResponse<>(true, "fetch car by id: "+carId+" successfully", car);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Car>>> searchCarsByLocation(@RequestParam String city) {
        List<Car> cars = carService.searchCarByLocation(city);
        ApiResponse<List<Car>> response = new ApiResponse<>(true, "fetch list car by city: "+city+" successfully", cars);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<ApiResponse<List<Car>>> filterCars(@RequestParam String city,
                                                             @RequestParam String company,
                                                             @RequestParam String fuel,
                                                             @RequestParam String transmission,
                                                             @RequestParam Integer minPrice,
                                                             @RequestParam Integer maxPrice,
                                                             @RequestParam Integer minSeats,
                                                             @RequestParam Integer maxSeats,
                                                             @RequestParam Integer yearOfProduction,
                                                             @RequestParam Integer fuelConsumption,
                                                             @RequestParam String sort) {
        List<Car> cars = carService.filterCars(city, company, fuel, transmission, minPrice, maxPrice, minSeats, maxSeats, yearOfProduction,fuelConsumption, sort);
        ApiResponse<List<Car>> response = new ApiResponse<>(true, "fetch list car filter successfully", cars);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/car/owner")
    public ResponseEntity<ApiResponse<User>> getOwner(@RequestParam Long carId) throws CarException {
        User owner = carService.getOwner(carId);
        ApiResponse<User> response = new ApiResponse<>(true, "fetch owner by carId: "+carId+" successfully", owner);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("car/reviews")
    public ResponseEntity<ApiResponse<Set<CarReview>>> getReviews(@RequestParam Long carId) throws CarException {
        Set<CarReview> carReviews = carService.getCarReview(carId);
        ApiResponse<Set<CarReview>> response = new ApiResponse<>(true, "fetch list car review by carID: "+carId+" successfully", carReviews);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
