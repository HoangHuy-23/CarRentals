package com.hihoanhuy23.CarRentalsBE.response;

import com.hihoanhuy23.CarRentalsBE.model.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String jwt;
    private String message;
    private UserRole role;
}
