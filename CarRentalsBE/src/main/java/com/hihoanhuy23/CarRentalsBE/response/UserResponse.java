package com.hihoanhuy23.CarRentalsBE.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserResponse {
    protected Long id;
    protected String name;
    protected String address;
    protected ContactResponse contact;
    protected UserRoleResponse userRole;
    protected String urlImage;
}
