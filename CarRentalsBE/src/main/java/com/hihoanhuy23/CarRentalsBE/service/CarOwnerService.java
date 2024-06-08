package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.Account;
import com.hihoanhuy23.CarRentalsBE.model.CarOwner;
import com.hihoanhuy23.CarRentalsBE.model.Contact;
import com.hihoanhuy23.CarRentalsBE.model.UserRole;

import java.util.Optional;

public interface CarOwnerService {
    CarOwner addNewCarOwner(String name, String address, Contact contact, UserRole userRole, String urlImage, Account account);

    CarOwner updateCarOwner(Long id, String name, String address, Contact contact, UserRole userRole, String urlImage, Account account);

    boolean deleteCarOwner(Long id);

    Optional<CarOwner> getCarOwnerById(Long id);
}
