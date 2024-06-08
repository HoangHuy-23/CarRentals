package com.hihoanhuy23.CarRentalsBE.repository;

import com.hihoanhuy23.CarRentalsBE.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
