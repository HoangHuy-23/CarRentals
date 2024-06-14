package com.hihoanhuy23.CarRentalsBE.controller;

import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.User;
import com.hihoanhuy23.CarRentalsBE.response.ApiResponse;
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

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<User>> findUserByJwtToken(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        ApiResponse<User> response = new ApiResponse<>(true, "fetch profile successfully", user);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/my-car")
    public ResponseEntity<ApiResponse<Set<Car>>> getMyCar(@RequestHeader("Authorization") String jwt) throws UserException {
        Set<Car> myCars = userService.getAllMyCar(jwt);
        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "fetch list your car successfully", myCars);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/my-favourite-car")
    public ResponseEntity<ApiResponse<Set<Car>>> getMyFavouriteCar(@RequestHeader("Authorization") String jwt) throws UserException {
        Set<Car> myFavouriteCars = userService.getMyFavouriteCar(jwt);
        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "fetch list your favourite car successfully", myFavouriteCars);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/like-car")
    public ResponseEntity<ApiResponse<Set<Car>>> likeCar(@RequestHeader("Authorization") String jwt, @RequestParam Long carId) throws CarException, UserException {
        Set<Car> myFavouriteCar = userService.likeCar(jwt, carId);
        ApiResponse<Set<Car>> response = new ApiResponse<>(true, "fetch list your favourite car successfully", myFavouriteCar);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
