package com.hihoanhuy23.CarRentalsBE.request;

import com.hihoanhuy23.CarRentalsBE.model.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
public class CreateCarRequest {
    private String licensePlates;
    private String company;
    private String model;
    private int seats;
    private int yearOfProduction;
    private TransmissionType transmission;
    private FuelType fuel;
    private int fuelConsumption;
    private String description;
    private Long price;
    private CarAddress address;
    private String carRentalTerms;
    private Set<CarImage> carImages;
}
