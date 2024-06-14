package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.DriverLicense;
import com.hihoanhuy23.CarRentalsBE.model.RentalContact;
import com.hihoanhuy23.CarRentalsBE.model.User;

import java.util.List;
import java.util.Set;

public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;

    public boolean deleteUser(Long userId) throws UserException;

    public User uploadAvatar(String jwt, String urlAvatar) throws UserException;

    public User uploadDriverLicense(String jwt, DriverLicense req) throws UserException;

    public User updateUser(String jwt, User req) throws UserException;

    public List<RentalContact> getAllRentalContactOfUser(String jwt);

    public Set<Car> getAllMyCar(String jwt) throws UserException;

    public Set<Car> getMyFavouriteCar(String jwt) throws UserException;

    public boolean selectDefaultAddress(String jwt) throws UserException;

    public Set<Car> likeCar(String jwt, Long carId) throws UserException, CarException;
}
