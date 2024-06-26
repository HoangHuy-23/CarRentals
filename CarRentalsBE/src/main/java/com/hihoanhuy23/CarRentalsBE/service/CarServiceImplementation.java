package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.CarException;
import com.hihoanhuy23.CarRentalsBE.exception.UserException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.CarRepository;
import com.hihoanhuy23.CarRentalsBE.request.CreateCarRequest;
import com.hihoanhuy23.CarRentalsBE.response.CarSearchResponse;
import com.hihoanhuy23.CarRentalsBE.response.PaginationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;


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
        car.setRatingScores(0);
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
    public List<Car> searchCarByLocation(String city) {
        return carRepository.searchCarByLocation(city);
    }


    @Override
    public CarSearchResponse filterCars(Integer pageNo, String city, String company, String fuel, String transmission, Integer price, String seat, String sort) {
        if ("all".equals(company)) {
            company = null;
        }
        FuelType fuelType = null;
        if (!"all".equals(fuel)) {
            fuelType = FuelType.valueOf(fuel);
        }

        TransmissionType transmissionType = null;
        if (!"all".equals(transmission)) {
            transmissionType = TransmissionType.valueOf(transmission);
        }

        Integer seats = null;
        if (!"all".equals(seat)) {
            seats = Integer.parseInt(seat);
        }

        Sort orders = null;
        if (sort.equals("price_low")) {
            orders = Sort.by("price").ascending();
        } else if (sort.equals("price_high")) {
            orders = Sort.by("price").descending();
        }

        assert orders != null;
        Pageable paging = PageRequest.of(pageNo-1, 2, orders);
        Page<Car> pagedResult = carRepository.filterCars(city, company, fuelType, transmissionType, price, seats, paging);
        List<Car> data = null;
        if (pagedResult.hasContent()) {
            data = pagedResult.getContent();
        } else {
            data = new ArrayList<>();
        }

        PaginationResponse pagination = new PaginationResponse(pagedResult.getTotalElements(), pageNo, pagedResult.getTotalPages());
        return new CarSearchResponse(data, pagination);
    }

    @Override
    public List<Car> findAll(Integer pageNo, Integer pageSize) {
        Pageable paging = PageRequest.of(pageNo, pageSize);
        Page<Car> pagedResult = carRepository.findAll(paging);
        if (!pagedResult.hasContent()) {
            return new ArrayList<Car>();
        }
        return pagedResult.stream().toList();
    }

    @Override
    public User getOwner(Long carId) throws CarException {
        Car car = findCarById(carId);
        return car.getOwner();
    }

    @Override
    public Set<CarReview> getCarReview(Long carId) throws CarException {
        Car car = findCarById(carId);
        return car.getCarReviews();
    }

}
