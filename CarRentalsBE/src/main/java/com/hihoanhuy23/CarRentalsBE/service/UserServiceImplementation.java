package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.config.JwtProvider;
import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.*;
import com.hihoanhuy23.CarRentalsBE.request.CreateReviewRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CarRepository carRepository;
    @Autowired
    private CarReviewRepository reviewRepository;
    @Autowired
    private UserAddressRepository userAddressRepository;
    @Autowired
    private DriverLicenseRepository driverLicenseRepository;



    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) {
            return user.get();
        }
        throw new UserException("User not found with id: "+userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email = jwtProvider.getEmailFromToken(jwt);
        User user = userRepository.findByEmail(email);
        if (user==null) {
            throw new UserException("User not found with email: "+email);
        }
        return user;
    }

    @Override
    public boolean deleteUser(Long userId) throws UserException {
        User user = findUserById(userId);
        if (user == null) return false;
        userRepository.delete(user);
        return true;
    }

    @Override
    public User uploadAvatar(User user, String urlAvatar) throws UserException {
        user.setAvatar(urlAvatar);
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public DriverLicense uploadDriverLicense(User user, DriverLicense req) throws UserException {
        DriverLicense driverLicense = user.getDriverLicense();
        if (driverLicense == null) {
            driverLicense = new DriverLicense();
        }

        driverLicense.setCode(req.getCode());
        driverLicense.setFullName(req.getFullName());
        driverLicense.setDob(req.getDob());
        driverLicense.setUrlImage(req.getUrlImage());
        driverLicense.setStatus(req.getStatus());
        driverLicense.setUser(user);


        user.setDriverLicense(driverLicense);
        userRepository.save(user);

        return driverLicenseRepository.save(driverLicense);
    }

    @Override
    public User updateUser(User user, User req) throws UserException {

        return null;
    }

    @Override
    public List<RentalContact> getAllRentalContactOfUser(User user) {
        return List.of();
    }

    @Override
    public Set<Car> getAllMyCar(User user) throws UserException {
        return user.getMyCars();
    }

    @Override
    public Set<Car> getMyFavouriteCar(User user) throws UserException {
        return user.getFavouriteCars();
    }

    @Override
    public boolean selectDefaultAddress(User user) throws UserException {
        return false;
    }

    @Override
    @Transactional
    public Set<Car> likeCar(User user, Car car) throws UserException, CarException {
        car.getUserFavourite().add(user);
        carRepository.save(car);
        user.getFavouriteCars().add(car);
        User updateCar = userRepository.save(user);
        return updateCar.getFavouriteCars();
    }

    @Override
    @Transactional
    public Set<Car> unlikeCar(User user, Car car) throws UserException, CarException {
        car.getUserFavourite().remove(user);
        carRepository.save(car);
        user.getFavouriteCars().remove(car);
        User unlikeCar = userRepository.save(user);
        return unlikeCar.getFavouriteCars();
    }

    @Override
    public CarReview reviewCar(User user, Car car, CreateReviewRequest req) throws UserException, CarException {
        CarReview carReview = new CarReview();
        carReview.setStart(req.getStart());
        carReview.setComment(req.getComment());
        carReview.setUser(user);
        carReview.setCar(car);
        carReview.setCreateAt(LocalDate.now());
        user.getCarReviews().add(carReview);
        userRepository.save(user);
        car.getCarReviews().add(carReview);
        carRepository.save(car);
        return reviewRepository.save(carReview);
    }

    @Override
    @Transactional
    public User addAddress(User user, UserAddress address) throws UserException {
        Set<UserAddress> userAddresses = user.getAddresses();
        if (userAddresses.isEmpty()) address.setDefault(true);
        userAddresses.add(address);
        user.setAddresses(userAddresses);
        address.setUser(user); // Ensure the UserAddress is associated with the User
        userAddressRepository.save(address);
        return userRepository.save(user);
    }

    @Override
    public UserAddress updateAddress(User user,UserAddress address, UserAddress req) throws UserException {
        if (req.isDefault()) {
            Set<UserAddress> userAddresses = user.getAddresses();
            for (UserAddress a : userAddresses) {
                a.setDefault(false);
            }
            userRepository.save(user);
        }
        address.setCity(req.getCity());
        address.setWard(req.getWard());
        address.setDistrict(req.getDistrict());
        address.setStreet(req.getStreet());
        address.setAddressMap(req.getAddressMap());
        address.setRemindName(req.getRemindName());
        address.setDefault(req.isDefault());
        return userAddressRepository.save(address);
    }

}
