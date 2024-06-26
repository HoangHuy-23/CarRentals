package com.hihoanhuy23.CarRentalsBE.controller;


import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.CarRepository;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import com.hihoanhuy23.CarRentalsBE.response.ApiResponse;
import com.hihoanhuy23.CarRentalsBE.response.CarSearchResponse;
import com.hihoanhuy23.CarRentalsBE.response.PaginationResponse;
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
    public ResponseEntity<CarSearchResponse> filterCars(@RequestParam Integer pageNo,
                                                        @RequestParam String city,
                                                        @RequestParam(required = false) String company,
                                                        @RequestParam(required = false) FuelType fuel,
                                                        @RequestParam(required = false) TransmissionType transmission,
                                                        @RequestParam(required = false) Integer minPrice,
                                                        @RequestParam(required = false) Integer maxPrice,
                                                        @RequestParam(required = false) Integer minSeats,
                                                        @RequestParam(required = false) Integer maxSeats,
                                                        @RequestParam(required = false) Integer yearOfProduction,
                                                        @RequestParam(required = false) Integer fuelConsumption,
                                                        @RequestParam(required = false) String sort) {
        CarSearchResponse response = carService.filterCars(pageNo,city, company, fuel, transmission, minPrice, maxPrice, minSeats, maxSeats, yearOfProduction,fuelConsumption, sort);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<Car>>> findAll(@RequestParam Integer pageNo, @RequestParam Integer pageSize) {
        List<Car> cars = carService.findAll(pageNo, pageSize);
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
