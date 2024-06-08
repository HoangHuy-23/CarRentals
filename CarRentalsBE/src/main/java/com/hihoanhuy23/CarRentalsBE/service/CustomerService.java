package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface CustomerService {
    Customer addNewCustomer(String name, String address, Contact contact, UserRole userRole, String urlImage, Account account);

    Customer updateCustomer(Long id, String name, String address, Contact contact, UserRole userRole, String urlImage, Account account, Set<Credential> credentials);

    boolean deleteCustomer(Long id);

    Optional<Customer> getCustomerById(Long id);
}
