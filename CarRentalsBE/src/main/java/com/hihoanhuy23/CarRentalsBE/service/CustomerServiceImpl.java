package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.ResourceNotFoundException;
import com.hihoanhuy23.CarRentalsBE.model.*;
import com.hihoanhuy23.CarRentalsBE.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService{
    private final CustomerRepository customerRepository;

    @Override
    public Customer addNewCustomer(String name, String address, Contact contact, UserRole userRole, String urlImage, Account account) {
        Customer customer = new Customer();
        customer.setName(name);
        customer.setAddress(address);
        customer.setContact(contact);
        customer.setUserRole(userRole);
        customer.setUrlImage(urlImage);
        customer.setAccount(account);
        return customerRepository.save(customer);
    }

    @Override
    public Customer updateCustomer(Long id, String name, String address, Contact contact, UserRole userRole, String urlImage,
                                   Account account, Set<Credential> credentials) {
        Customer customer = customerRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Customer not found!"));
        customer.setName(name);
        customer.setAddress(address);
        customer.setContact(contact);
        customer.setUserRole(userRole);
        customer.setUrlImage(urlImage);
        customer.setAccount(account);
        customer.setCredentials(credentials);
        return customerRepository.save(customer);
    }

    @Override
    public boolean deleteCustomer(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
         if (customer.isPresent()){
            customerRepository.deleteById(id);
            return true;
        };
        return false;
    }

    @Override
    public Optional<Customer> getCustomerById(Long id) {
        return Optional.of(customerRepository.findById(id).get());
    }
}
