package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.config.JwtProvider;
import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.DriverLicense;
import com.hihoanhuy23.CarRentalsBE.model.RentalContact;
import com.hihoanhuy23.CarRentalsBE.model.User;
import com.hihoanhuy23.CarRentalsBE.repository.CarRepository;
import com.hihoanhuy23.CarRentalsBE.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CarService carService;
    @Autowired
    private CarRepository carRepository;


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
    public User uploadAvatar(String jwt, String urlAvatar) throws UserException {
        User user = findUserProfileByJwt(jwt);
        user.setAvatar(urlAvatar);
        return userRepository.save(user);
    }

    @Override
    public User uploadDriverLicense(String jwt, DriverLicense req) throws UserException {
        User user = findUserProfileByJwt(jwt);
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

        return userRepository.save(user);
    }

    @Override
    public User updateUser(String jwt, User req) throws UserException {

        return null;
    }

    @Override
    public List<RentalContact> getAllRentalContactOfUser(String jwt) {
        return List.of();
    }

    @Override
    public Set<Car> getAllMyCar(String jwt) throws UserException {
        User user = findUserProfileByJwt(jwt);
        return user.getMyCars();
    }

    @Override
    public Set<Car> getMyFavouriteCar(String jwt) throws UserException {
        User user = findUserProfileByJwt(jwt);
        return user.getFavouriteCars();
    }

    @Override
    public boolean selectDefaultAddress(String jwt) throws UserException {
        return false;
    }

    @Override
    @Transactional
    public Set<Car> likeCar(String jwt, Long carId) throws UserException, CarException {
        User user = findUserProfileByJwt(jwt);
        Car car = carService.findCarById(carId);
        car.getUserFavourite().add(user);
        carRepository.save(car);
        user.getFavouriteCars().add(car);
        User updateCar = userRepository.save(user);
        return updateCar.getFavouriteCars();
    }
}
