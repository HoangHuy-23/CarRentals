package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.Credential;

import java.util.List;

public interface CredentialService {
    Credential addNewCredential();

    Credential updateCredential();

    boolean deleteCredential();

    List<Credential> getAllCredentialByCustomerId(Long customerId);
}
