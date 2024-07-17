package com.hihoanhuy23.CarRentalsBE.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.UserAddressRepository;
import com.hihoanhuy23.CarRentalsBE.repository.UserRepository;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import com.hihoanhuy23.CarRentalsBE.request.CreateReviewRequest;
import com.hihoanhuy23.CarRentalsBE.request.UploadDriverLicenseRequest;
import com.hihoanhuy23.CarRentalsBE.response.ApiResponse;
import com.hihoanhuy23.CarRentalsBE.service.CarService;
import com.hihoanhuy23.CarRentalsBE.service.CloudinaryService;
import com.hihoanhuy23.CarRentalsBE.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.Map;
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
    @Autowired
    private UserAddressRepository userAddressRepository;
    @Autowired
    private CloudinaryService cloudinaryService;

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

    @PostMapping("/add-address")
    public ResponseEntity<User> addNewAddress(@RequestHeader("Authorization") String jwt, @RequestBody UserAddress req) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        User userAddress = userService.addAddress(user, req);
        return new ResponseEntity<>(userAddress, HttpStatus.CREATED);
    }

    @PutMapping("/update-address")
    public ResponseEntity<UserAddress> updateAddress(@RequestHeader("Authorization") String jwt,@RequestParam Long idAddress, @RequestBody UserAddress req) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        UserAddress address = userAddressRepository.getReferenceById(idAddress);
        UserAddress updated = userService.updateAddress(user, address, req);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @PostMapping("/upload-driver-license")
    public  ResponseEntity<DriverLicense> uploadDriverLicense(@RequestHeader("Authorization") String jwt, @RequestBody DriverLicense req) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        DriverLicense updated = userService.uploadDriverLicense(user, req);
        return new ResponseEntity<>(updated, HttpStatus.CREATED);
    }

    @PostMapping(value = "/upload", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<DriverLicense> uploadDriverLicense(
            @RequestHeader("Authorization") String jwt,
            @ModelAttribute UploadDriverLicenseRequest req,
            @RequestPart(value = "image", required = false)  MultipartFile image) throws UserException {

        User user = userService.findUserProfileByJwt(jwt);

        DriverLicense driverLicense = new DriverLicense();
        driverLicense.setCode(req.getCode());
        driverLicense.setFullName(req.getFullName());
        driverLicense.setDob(req.getDob());
        driverLicense.setStatus(req.getStatus());

        if (image==null) {
            driverLicense.setUrlImage(user.getDriverLicense().getUrlImage());
        } else {
            try {
                Map uploadResult = cloudinaryService.upload(image, req.getCode());
                driverLicense.setUrlImage(uploadResult.get("url").toString());
            } catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }


        // Lưu driverLicense vào cơ sở dữ liệu nếu cần

        DriverLicense updated = userService.uploadDriverLicense(user, driverLicense);
        return new ResponseEntity<>(updated, HttpStatus.CREATED);
    }
}
