package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.Account;

import java.util.Optional;

public interface AccountService {
    Account addNewAccount(String username, String password);

    Account updateAccount(Long accountId, String username, String password);

    boolean deleteAccount(Long accountId);

    Optional<Account> getAccountById(Long accountId);
}
