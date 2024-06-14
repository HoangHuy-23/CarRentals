package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.CarRepository;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service
@RequiredArgsConstructor
public class CarServiceImplementation implements CarService{
    @Autowired
    private CarRepository carRepository;

    @Override
    public Car createCar(CreateCarRequest req, User owner) throws UserException {
        Car car = new Car();
        car.setLicencePlates(req.getLicensePlates());
        car.setCompany(req.getCompany());
        car.setModel(req.getModel());
        car.setSeats(req.getSeats());
        car.setYearOfProduction(req.getYearOfProduction());
        car.setTransmission(req.getTransmission());
        car.setFuel(req.getFuel());
        car.setFuelConsumption(req.getFuelConsumption());
        car.setDescription(req.getDescription());
        car.setPrice(req.getPrice());
        car.setAddress(req.getAddress());
        car.setCarRentalTerms(req.getCarRentalTerms());
        car.setOwner(owner);
        car.setNumOfTrip(0);
        car.setStatus(AuthenticationStatus.PENDING);

        Set<CarImage> carImages = new HashSet<>();
        for (CarImage carImage : req.getCarImages()) {
            carImage.setCar(car);
            carImages.add(carImage);
        }
        car.setCarImages(carImages);

        return carRepository.save(car);
    }

    @Override
    public boolean deleteCar(Long carId) throws CarException {
        Car car = findCarById(carId);
        if (car==null) return false;
        car.getCarImages().clear();
        carRepository.deleteById(car.getId());
        return true;
    }

    @Override
    public Car updateCar(Long carId, CreateCarRequest req) throws CarException {
        return null;
    }


    @Override
    public Car findCarById(Long carId) throws CarException {
        Optional<Car> opt = carRepository.findById(carId);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw new CarException("Car not found with id: "+carId);
    }

    @Override
    public Car updateCarStatus(Long carId) throws CarException {
        return null;
    }

    @Override
    public List<Car> filterCar(String city, LocalDateTime pickUp, LocalDateTime dropOff) {
        return List.of();
    }

}
