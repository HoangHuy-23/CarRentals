package com.hihoanhuy23.CarRentalsBE.service;

import com.hihoanhuy23.CarRentalsBE.model.Certificate;

import java.util.List;

public interface CertificateService {
    Certificate addNewCertificate();

    Certificate updateCertificate();

    boolean deleteCertificate();

    List<Certificate> getAllCertificateByCarId(Long carId);
}
