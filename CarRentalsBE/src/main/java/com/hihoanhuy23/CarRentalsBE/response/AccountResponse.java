package com.hihoanhuy23.CarRentalsBE.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AccountResponse {
    private Long id;
    private String userName;
    private String password;

    public AccountResponse(Long id, String userName, String password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }
}
