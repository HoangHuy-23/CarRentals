package com.hihoanhuy23.CarRentalsBE.response;

import com.hihoanhuy23.CarRentalsBE.model.Car;
import com.hihoanhuy23.CarRentalsBE.model.CertificateType;
import jakarta.persistence.*;

public class CertificateResponse {
    private CertificateTypeResponse certificateType;
    private String urlFile;
    private CarResponse car;
}
