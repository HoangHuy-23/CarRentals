package com.hihoanhuy23.CarRentalsBE.repository;

import com.hihoanhuy23.CarRentalsBE.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
