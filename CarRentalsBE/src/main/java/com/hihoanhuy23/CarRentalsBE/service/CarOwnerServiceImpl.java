package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.ResourceNotFoundException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.CarOwnerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarOwnerServiceImpl implements CarOwnerService{
    private final CarOwnerRepository carOwnerRepository;
    
    @Override
    public CarOwner addNewCarOwner(String name, String address, Contact contact, UserRole userRole, String urlImage, Account account) {
        CarOwner carOwner = new CarOwner();
        carOwner.setName(name);
        carOwner.setAddress(address);
        carOwner.setContact(contact);
        carOwner.setUserRole(userRole);
        carOwner.setUrlImage(urlImage);
        carOwner.setAccount(account);
        return carOwnerRepository.save(carOwner);
    }

    @Override
    public CarOwner updateCarOwner(Long id, String name, String address, Contact contact, UserRole userRole, String urlImage, Account account) {
        CarOwner carOwner = carOwnerRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("carOwner not found!"));
        carOwner.setName(name);
        carOwner.setAddress(address);
        carOwner.setContact(contact);
        carOwner.setUserRole(userRole);
        carOwner.setUrlImage(urlImage);
        carOwner.setAccount(account);
        return carOwnerRepository.save(carOwner);
    }

    @Override
    public boolean deleteCarOwner(Long id) {
        Optional<CarOwner> carOwner = carOwnerRepository.findById(id);
        if (carOwner.isPresent()) {
            carOwnerRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Optional<CarOwner> getCarOwnerById(Long id) {
        return Optional.of(carOwnerRepository.findById(id).get());
    }
}
