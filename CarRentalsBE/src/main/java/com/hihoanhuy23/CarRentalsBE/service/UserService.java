package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import com.hihoanhuy23.CarRentalsBE.request.CreateReviewRequest;

import java.util.List;
import java.util.Set;

public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;

    public boolean deleteUser(Long userId) throws UserException;

    public User uploadAvatar(User user, String urlAvatar) throws UserException;

    public User uploadDriverLicense(User user, DriverLicense req) throws UserException;

    public User updateUser(User user, User req) throws UserException;

    public List<RentalContact> getAllRentalContactOfUser(User user);

    public Set<Car> getAllMyCar(User user) throws UserException;

    public Set<Car> getMyFavouriteCar(User user) throws UserException;

    public boolean selectDefaultAddress(User user) throws UserException;

    public Set<Car> likeCar(User user, Car car) throws UserException, CarException;

    public Set<Car> unlikeCar(User user, Car car) throws UserException, CarException;

    public CarReview reviewCar(User user, Car car, CreateReviewRequest req) throws UserException, CarException;
}
