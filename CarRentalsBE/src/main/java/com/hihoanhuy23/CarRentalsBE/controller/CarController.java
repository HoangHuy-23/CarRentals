package com.hihoanhuy23.CarRentalsBE.controller;


import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
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
    @GetMapping("/car/{carId}")
    public ResponseEntity<Car> findCarByIdHandler(@PathVariable Long carId) throws CarException {
        Car car = carService.findCarById(carId);
        return ResponseEntity.ok(car);
    }
}
