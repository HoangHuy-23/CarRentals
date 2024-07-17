package com.hihoanhuy23.CarRentalsBE.request;

import com.hihoanhuy23.CarRentalsBE.model.AuthenticationStatus;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
public class UploadDriverLicenseRequest {
    private Long id;
    private String code;
    private String fullName;
    private LocalDate dob;
    private AuthenticationStatus status;
}
