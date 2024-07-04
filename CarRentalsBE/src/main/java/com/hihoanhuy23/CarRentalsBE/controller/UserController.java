package com.hihoanhuy23.CarRentalsBE.controller;

import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.CarReview;
import com.hihoanhuy23.CarRentalsBE.model.User;
import com.hihoanhuy23.CarRentalsBE.repository.UserRepository;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import com.hihoanhuy23.CarRentalsBE.request.CreateReviewRequest;
import com.hihoanhuy23.CarRentalsBE.response.ApiResponse;
import com.hihoanhuy23.CarRentalsBE.service.CarService;
import com.hihoanhuy23.CarRentalsBE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private CarService carService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<User>> findUserByJwtToken(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        ApiResponse<User> response = new ApiResponse<>(true, "fetch profile successfully", user);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/my-car")
    public ResponseEntity<Set<Car>> getMyCar(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Set<Car> myCars = userService.getAllMyCar(user);
//        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "fetch list your car successfully", myCars);
        return new ResponseEntity<>(myCars, HttpStatus.OK);
    }

    @GetMapping("/my-favourite-car")
    public ResponseEntity<Set<Car>> getMyFavouriteCar(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Set<Car> myFavouriteCars = userService.getMyFavouriteCar(user);
//        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "fetch list your favourite car successfully", myFavouriteCars);
        return new ResponseEntity<>(myFavouriteCars, HttpStatus.OK);
    }

    @PostMapping("/like-car")
    public ResponseEntity<ApiResponse<Set<Car>>> likeCar(@RequestHeader("Authorization") String jwt, @RequestParam Long carId) throws CarException, UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Car car = carService.findCarById(carId);
        Set<Car> myFavouriteCar = userService.likeCar(user, car);
        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "add car to list your favourite car successfully", myFavouriteCar);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/unlike-car")
    public ResponseEntity<ApiResponse<Set<Car>>> unlikeCar(@RequestHeader("Authorization") String jwt, @RequestParam Long carId) throws CarException, UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Car car = carService.findCarById(carId);
        Set<Car> myFavouriteCar = userService.unlikeCar(user, car);
        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "unlike car successfully", myFavouriteCar);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/add-review")
    public ResponseEntity<ApiResponse<CarReview>> reviewCar(@RequestHeader("Authorization") String jwt, @RequestParam Long carId, @RequestBody CreateReviewRequest req) throws UserException, CarException {
        User user = userService.findUserProfileByJwt(jwt);
        Car car = carService.findCarById(carId);
        CarReview review= userService.reviewCar(user, car, req);
        ApiResponse<CarReview> response = new ApiResponse<>(true, "review successfully", review);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/create-new-car")
    public ResponseEntity<ApiResponse<Car>> createCarHandler(@RequestBody CreateCarRequest carReq, @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        Car savedCar = carService.createCar(carReq, user);
        ApiResponse<Car> response = new ApiResponse<>(true, "Car create successfully", savedCar);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/update-my-account")
    public ResponseEntity<ApiResponse<User>> updateUserHandler(@RequestHeader("Authorization") String jwt,@RequestBody User req) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        user.setDob(req.getDob());
        user.setGender(req.isGender());
        user.setPhone(req.getPhone());
        user.setEmail(req.getEmail());
        userRepository.save(user);
        ApiResponse<User> response = new ApiResponse<>(true, "Update successfully", user);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
