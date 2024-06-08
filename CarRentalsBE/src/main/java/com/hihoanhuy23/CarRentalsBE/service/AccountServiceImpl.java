package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.exception.ResourceNotFoundException;
import com.hihoanhuy23.CarRentalsBE.model.Account;
import com.hihoanhuy23.CarRentalsBE.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService{
    private final AccountRepository accountRepository;

    @Override
    public Account addNewAccount(String username, String password) {
        Account account = new Account();
        account.setUserName(username);
        account.setPassword(password);
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Long accountId, String username, String password) {
        Account account = accountRepository.findById(accountId).orElseThrow(()-> new ResourceNotFoundException("Account not found!"));
        if (username != null) account.setUserName(username);
        if (password != null) account.setPassword(password);
        return accountRepository.save(account);
    }

    @Override
    public boolean deleteAccount(Long accountId) {
        Optional<Account> account = accountRepository.findById(accountId);
        if (account.isPresent()) {
            accountRepository.deleteById(accountId);
            return true;
        }
        return false;
    }

    @Override
    public Optional<Account> getAccountById(Long accountId) {
        return Optional.of(accountRepository.findById(accountId).get());
    }
}
