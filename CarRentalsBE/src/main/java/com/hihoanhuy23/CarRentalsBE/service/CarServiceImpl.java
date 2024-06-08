package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.ResourceNotFoundException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements CarService{
    private final CarRepository carRepository;

    @Override
    public Car addNewCar(String name, String carLocation, int modelOfYear, String description, CarType carType,
                         boolean isCollateral, FuelType fuelType, int fuelConsumption, long pricePerDay,
                         List<CarImage> carImages, CarStatus status, List<Certificate> certificates, CarOwner carOwner) {
        Car car = new Car();
        car.setName(name);
        car.setCarLocation(carLocation);
        car.setModalOfYear(modelOfYear);
        car.setDescription(description);
        car.setCarType(carType);
        car.setCollateral(isCollateral);
        car.setFuelType(fuelType);
        car.setFuelConsumption(fuelConsumption);
        car.setPricePerDay(pricePerDay);
        car.setCarImages(carImages);
        car.setStatus(status);
        car.setCertificates(certificates);
        car.setCarOwner(carOwner);
        return carRepository.save(car);
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public Optional<Car> getCarById(Long carId) {
        return Optional.of(carRepository.findById(carId).get());
    }

    @Override
    public Car updateCar() {
        return null;
    }

    @Override
    public boolean deleteCar(Long carId) {
        Optional<Car> car = carRepository.findById(carId);
        if (car.isPresent()) {
            carRepository.deleteById(carId);
            return true;
        }
        return false;
    }
}
